import { Button } from "@/components/Button"
import { ButtonText } from "@/components/ButtonText"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { Select } from "@/components/Select"
import { TextArea } from "@/components/TextArea"
import { api } from "@/services/api"
import { FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { Task } from "./Tasks"
import { Team } from "./Teams"
import { TeamMember } from "./Members"
import { z, ZodError } from "zod"
import { AxiosError } from "axios"

const taskSchema = z.object({
  title: z.string().trim().optional(),
  description: z.string().trim().optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
  team_id: z.string().uuid().optional(),
  assigned_to: z.string().uuid().nullable().optional(),
})

export function EditTask() {
  const params = useParams<{ id: string }>()

  const navigate = useNavigate()

  const [task, setTask] = useState<Task>()
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("low")
  const [team, setTeam] = useState("")
  const [description, setDescription] = useState("")
  const [assignedTo, setAssignedTo] = useState<string>("")
  const [listTeams, setListTeams] = useState<Team[]>()
  const [listTeamMembers, setListTeamMembers] = useState<TeamMember[]>()

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const taskEdited = taskSchema.parse({
        title,
        priority,
        team_id: team,
        description,
        assigned_to: assignedTo ? assignedTo : null,
      })

      const confirmEdit = confirm("Tem certeza que deseja editar a tarefa?")

      if (!confirmEdit) {
        return
      }

      await api.put(`/tasks/${task?.id}`, taskEdited)
      alert("Editado com sucesso!")
      navigate("/")
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      alert("Não foi possível cadastrar!")
    }
  }

  useEffect(() => {
    async function showTask() {
      const { data } = await api.get<Task>(`/tasks/${params.id}`)

      setTask(data)
      setTitle(data.title)
      setPriority(data.priority)
      setTeam(data.teamId)
      setDescription(data.description)
      setAssignedTo(data.assignedTo ? data.assignedTo : "")

      const { data: teams } = await api.get<Team[]>("/teams")
      setListTeams(teams)
    }

    showTask()
  }, [params.id])

  useEffect(() => {
    async function fetchTeamMembers() {
      const { data: teamMembers } = await api.get<TeamMember[]>(
        `/team-members?teamId=${team}`
      )
      setListTeamMembers(teamMembers)
    }

    fetchTeamMembers()
  }, [team])

  return (
    <>
      <ButtonText />
      {task && (
        <form
          className="flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-8"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <PageTitle title="Editar tarefa" />
            <Select
              label="Responsável pela tarefa"
              selectSize="small"
              className="md:flex-row text-nowrap md:items-center"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option value="">Nenhum</option>
              {listTeamMembers?.map((member) => (
                <option key={member.userId} value={member.userId}>
                  {member.user.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <Input
              label="Título"
              className="grow-5"
              placeholder="De um breve título"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Select
              label="Prioridade"
              className="grow-2"
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
            </Select>
            <Select
              label="Equipe"
              className="grow-3"
              id="team"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              required
            >
              {listTeams?.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </Select>
          </div>
          <TextArea
            label="Descrição"
            placeholder="Descreva com detalhes a tarefa"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Button size="medium" className="md:self-end" type="submit">
            Salvar
          </Button>
        </form>
      )}
    </>
  )
}
