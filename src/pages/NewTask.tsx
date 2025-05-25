import { Button } from "@/components/Button"
import { ButtonText } from "@/components/ButtonText"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { Select } from "@/components/Select"
import { TextArea } from "@/components/TextArea"
import { api } from "@/services/api"
import { FormEvent, useEffect, useState } from "react"
import { Team } from "./Teams"
import { z, ZodError } from "zod"
import { AxiosError } from "axios"
import { useNavigate } from "react-router"

const taskSchema = z.object({
  title: z.string().trim().min(1),
  priority: z.enum(["low", "medium", "high"]),
  team_id: z.string(),
  description: z.string(),
})

export function NewTask() {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("low")
  const [team, setTeam] = useState("")
  const [description, setDescription] = useState("")
  const [teams, setTeams] = useState<Team[]>()

  const navigate = useNavigate()

  async function fetchTeams() {
    const { data } = await api.get("/teams")

    setTeams(data)
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const newTask = taskSchema.parse({
        title,
        priority,
        team_id: team,
        description,
      })

      await api.post("/tasks", newTask)

      alert("Cadastrado com sucesso!")
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
    fetchTeams()
  }, [])

  return (
    <>
      <ButtonText />
      <form
        className="flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-8"
        onSubmit={onSubmit}
      >
        <PageTitle title="Nova tarefa" />

        <div className="flex flex-col lg:flex-row gap-8">
          <Input
            label="Título"
            className="grow-5"
            placeholder="De um breve título"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Select
            label="Prioridade"
            className="grow-2"
            id="priority"
            defaultValue="low"
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
            onChange={(e) => setTeam(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            {teams &&
              teams?.map((team) => (
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
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button size="medium" className="md:self-end" type="submit">
          Salvar
        </Button>
      </form>
    </>
  )
}
