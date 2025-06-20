import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { TeamCard } from "@/components/TeamCard"
import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { GoPlus } from "react-icons/go"
import { IoIosSearch } from "react-icons/io"
import { useNavigate } from "react-router"
import { Task } from "./Tasks"

export type Team = {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
  teamMembers: TeamMembers[]
  tasks: Task[]
}

type TeamMembers = {
  id: string
  userId: string
  teamId: string
  createdAt: string
  team: Team
  user: Team
}

export function Teams() {
  const [teams, setTeams] = useState<Team[]>([])

  const [searchTeam, setSearchTeam] = useState("")

  const navigate = useNavigate()

  function handleClickNewTaskButton() {
    navigate("/new-team")
  }

  useEffect(() => {
    async function fetchTeams() {
      let url = "/teams"

      if (searchTeam) {
        const params = new URLSearchParams()
        params.append("name", searchTeam)
        url += `?${params.toString()}`
      }

      const { data } = await api.get<Team[]>(url)

      setTeams(data)
    }

    fetchTeams()
  }, [searchTeam])

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 lg:flex lg:justify-between">
        <PageTitle title="Todas equipes" className="text-nowrap" />
        <Input
          placeholder="Pesquise uma equipe"
          className="lg:max-w-180 w-full col-span-2"
          icon={IoIosSearch}
          value={searchTeam}
          onChange={(e) => setSearchTeam(e.target.value)}
        />

        <Button
          size="small"
          className="[@media(max-width:1023px)]:w-12 [@media(max-width:1023px)]:p-0 ml-auto lg:m-0 col-start-2 col-end-3 row-start-1 row-end-2"
          onClick={handleClickNewTaskButton}
        >
          <GoPlus size={24} />
          <span className="hidden lg:block">Nova equipe</span>
        </Button>
      </div>
      <div className="mt-4 lg:mt-8 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            teamId={team.id}
            teamName={team.name}
            description={team.description}
            numberOfMembers={team.teamMembers.length}
            numberOfTasks={
              team.tasks.filter((task) => task.status !== "completed").length
            }
          />
        ))}
      </div>
    </>
  )
}
