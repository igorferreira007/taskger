import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { TeamCard } from "@/components/TeamCard"
import { GoPlus } from "react-icons/go"
import { IoIosSearch } from "react-icons/io"
import { useNavigate } from "react-router"

export function Teams() {
  const navigate = useNavigate()

  function handleClickNewTaskButton() {
    navigate("/new-team")
  }

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 lg:flex lg:justify-between">
        <PageTitle title="Todas equipes" className="text-nowrap" />
        <Input
          placeholder="Pesquise uma equipe"
          className="lg:max-w-180 w-full col-span-2"
          icon={IoIosSearch}
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
        <TeamCard
          teamName="Equipe de Desenvolvimento e suporte"
          description="Team description, lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          numberOfMembers={5}
          numberOfTasks={10}
        />
        <TeamCard
          teamName="Equipe 2 Infraestrutura / Tech"
          description="Team description, lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsu"
          numberOfMembers={3}
          numberOfTasks={20}
        />
        <TeamCard
          teamName="Equipe de Desenvolvimento e suporte"
          description="Team description, lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          numberOfMembers={5}
          numberOfTasks={10}
        />
        <TeamCard
          teamName="Equipe 2 Infraestrutura / Tech"
          description="Team description, lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsu"
          numberOfMembers={3}
          numberOfTasks={20}
        />
      </div>
    </>
  )
}
