import { Input } from "@/components/Input"
import { MemberTableRow } from "@/components/MemberTableRow"
import { PageTitle } from "@/components/PageTitle"
import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { IoIosSearch } from "react-icons/io"

export type TeamMember = {
  id: string
  userId: string
  teamId: string
  createdAt: string
  team: Team
  user: User
}

type User = {
  name: string
  email: string
  role: string
  createdAt: string
}

type Team = {
  name: string
}

export function Members() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [searchMembers, setSearchMembers] = useState("")
  const [reloadList, setReloadList] = useState(false)

  function handleRefreshTeamMembers() {
    setReloadList(true)
  }

  useEffect(() => {
    async function fetchTeamMembers() {
      let url = "/team-members"

      if (searchMembers) {
        const params = new URLSearchParams()

        params.append("userName", searchMembers)
        url += `?${params.toString()}`
      }

      const { data } = await api.get<TeamMember[]>(url)
      setTeamMembers(data)
    }

    fetchTeamMembers()
    setReloadList(false)
  }, [searchMembers, reloadList])

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 lg:flex lg:justify-between">
        <PageTitle title="Todos membros" className="text-nowrap" />
        <Input
          placeholder="Pesquise um membro"
          className="lg:max-w-180 w-full col-span-2"
          icon={IoIosSearch}
          value={searchMembers}
          onChange={(e) => setSearchMembers(e.target.value)}
        />
      </div>
      <div className="mt-4 lg:mt-8 overflow-x-auto">
        <table className="text-sm lg:text-base w-full min-w-270 border-separate border-spacing-y-2 text-nowrap">
          <thead className="bg-brand/20">
            <tr>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2 w-full">
                Nome
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2">
                Email
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2">
                Cargo
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2">
                Equipe
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2 w-34">
                Data de entrada
              </th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((teamMember) => (
              <MemberTableRow
                key={teamMember.id}
                teamMemberId={teamMember.id}
                userId={teamMember.userId}
                name={teamMember.user.name}
                email={teamMember.user.email}
                role={teamMember.user.role}
                teamId={teamMember.teamId}
                startDate={teamMember.createdAt}
                updateTeamMemberList={handleRefreshTeamMembers}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
