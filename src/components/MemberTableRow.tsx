import { useEffect, useState } from "react"
import { Select } from "./Select"
import { api } from "@/services/api"
import { Team } from "@/pages/Teams"
import { AxiosError } from "axios"
import { ZodError } from "zod"

type Props = {
  teamMemberId: string
  userId: string
  name: string
  email: string
  role: string
  teamId: string
  startDate: string
  updateTeamMemberList: () => void
}

export function MemberTableRow({
  teamMemberId,
  userId,
  name,
  email,
  role,
  teamId,
  startDate,
  updateTeamMemberList,
}: Props) {
  const [teams, setTeams] = useState<Team[]>([])
  const [selectedTeam, setSelectedTeam] = useState(teamId)
  const [selectedRole, setSelectedRole] = useState(role)

  const formattedStartDate = new Date(startDate).toLocaleDateString("pt-BR")

  async function fetchTeams() {
    const { data } = await api.get<Team[]>("/teams")

    setTeams(data)
  }

  async function handleChangedRole(e: React.ChangeEvent<HTMLSelectElement>) {
    try {
      const value = e.target.value

      const confirmChangeRole = confirm(
        "Tem certeza que deseja altera o cargo desse membro?"
      )

      if (!confirmChangeRole) {
        return
      }

      await api.patch(`/users/${userId}/role`, { role: value })
      setSelectedRole(value)
      alert("O cargo desse membro foi atualizado com sucesso!")
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        alert("AxiosError: \n" + error.response?.data.message)
        return
      }

      if (error instanceof ZodError) {
        alert("ZodError: \n" + error.issues[0].message)
        return
      }
    }
  }

  async function handleChangeTeam(e: React.ChangeEvent<HTMLSelectElement>) {
    try {
      const value = e.target.value

      const confirmChangeTeam = confirm(
        "Tem certeza que deseja mover esse membro para outro time?"
      )

      if (!confirmChangeTeam) {
        return
      }

      if (value === "remove") {
        await api.delete(`/team-members/${teamMemberId}`)
        setSelectedTeam(value)
        alert("O membro foi removido da equipe.")
        updateTeamMemberList()
        return
      }

      await api.patch(`/team-members/${teamMemberId}/team-update`, {
        teamId: value,
      })
      setSelectedTeam(value)
      alert("O membro foi movido para outro time com sucesso!")
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        alert("AxiosError: \n" + error.response?.data.message)
        return
      }

      if (error instanceof ZodError) {
        alert("ZodError: \n" + error.issues[0].message)
        return
      }
    }
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  return (
    <tr className="bg-background-tertiary h-12">
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        {name}
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2 max-w-60 overflow-hidden">
        {email}
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        <Select
          selectSize="xs"
          value={selectedRole}
          onChange={handleChangedRole}
        >
          <option value="member">Membro</option>
          <option value="admin">Administrador</option>
        </Select>
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        <Select
          selectSize="xs"
          value={selectedTeam}
          onChange={handleChangeTeam}
        >
          <option value="remove">Nenhuma</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </Select>
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        {formattedStartDate}
      </td>
    </tr>
  )
}
