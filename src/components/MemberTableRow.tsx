import { useEffect, useState } from "react"
import { Select } from "./Select"
import { api } from "@/services/api"
import { Team } from "@/pages/Teams"

type Props = {
  name: string
  email: string
  role: string
  teamName: string
  startDate: string
}

export function MemberTableRow({
  name,
  email,
  role,
  teamName,
  startDate,
}: Props) {
  const [teams, setTeams] = useState<Team[]>()
  const [selectedTeam, setSelectedTeam] = useState(teamName)

  const formattedStartDate = new Date(startDate).toLocaleDateString("pt-BR")

  async function fetchTeams() {
    const { data } = await api.get<Team[]>("/teams")

    setTeams(data)
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
        <Select selectSize="xs" defaultValue={role}>
          <option value="member">Membro</option>
          <option value="admin">Administrador</option>
        </Select>
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        <Select
          selectSize="xs"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          {teams?.map((team) => (
            <option key={team.id} value={team.name}>
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
