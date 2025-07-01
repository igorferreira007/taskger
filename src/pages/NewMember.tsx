import { ButtonText } from "@/components/ButtonText"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { Select } from "@/components/Select"
import { api } from "@/services/api"
import { FormEvent, useEffect, useState } from "react"
import { Team } from "./Teams"
import { Button } from "@/components/Button"
import { z, ZodError } from "zod"
import { AxiosError } from "axios"
import { useNavigate } from "react-router"

const newMemberSchema = z.object({
  user_id: z.string().uuid(),
  team_id: z.string().uuid(),
})

type User = {
  id: string
  name: string
  email: string
  role: "admin" | "member"
  createdAt: string
  updatedAt: string
}

export function NewMember() {
  const [users, setUsers] = useState<User[]>([])
  const [teams, setTeams] = useState<Team[]>([])
  const [searchUser, setSearchUser] = useState("")
  const [selectedUser, setSelectedUser] = useState("")
  const [selectedTeam, setSelectedTeam] = useState("")

  const navigate = useNavigate()

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    if (!selectedUser || !selectedTeam) {
      return alert("Por favor, selecione um usuário e uma equipe.")
    }

    try {
      const newMember = newMemberSchema.parse({
        user_id: selectedUser,
        team_id: selectedTeam,
      })

      await api.post("/team-members", newMember)
      alert("Membro cadastrado com sucesso!")
      navigate("/members")
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
    async function fetchUsers() {
      let url = "/users"

      if (searchUser) {
        const params = new URLSearchParams()

        params.append("name", searchUser)

        url += `?${params.toString()}`
      }

      const { data } = await api.get<User[]>(url)

      setUsers(data)

      if (data.length > 0) {
        setSelectedUser(data[0].id)
        return
      }

      setSelectedUser("")
    }

    fetchUsers()
  }, [searchUser])

  useEffect(() => {
    async function fetchTeams() {
      const { data } = await api.get<Team[]>("/teams")

      setTeams(data)

      if (data.length > 0) {
        setSelectedTeam(data[0].id)
        return
      }

      setSelectedTeam("")
    }

    fetchTeams()
  }, [])

  useEffect(() => {
    console.log(selectedUser)
  }, [selectedUser])

  return (
    <>
      <ButtonText />
      <form
        className="flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-8"
        onSubmit={onSubmit}
      >
        <PageTitle title="Novo membro" />
        <Input
          placeholder="Pesquisar usuários"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        />
        <Select
          label="Usuários"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Select>
        <Select
          label="Equipes"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </Select>

        <Button size="medium" className="md:self-end" type="submit">
          Salvar
        </Button>
      </form>
    </>
  )
}
