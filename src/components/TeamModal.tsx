import * as Dialog from "@radix-ui/react-dialog"
import * as Accordion from "@radix-ui/react-accordion"
import { GoX } from "react-icons/go"
import { AccordionItem } from "./AccordionItem"
import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { Team } from "@/pages/Teams"
import { TaskStatus, variantsTaskStatus } from "./TaskStatus"

type Props = {
  teamId: string
}

export function TeamModal({ teamId }: Props) {
  const [team, setTeam] = useState<Team>()

  async function showTeam(id: string) {
    const { data } = await api.get<Team>(`/teams/${id}`)

    setTeam(data)
  }

  useEffect(() => {
    showTeam(teamId)
  }, [teamId])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/50 fixed w-full h-screen inset-0 z-50" />
      <Dialog.Content className="bg-background-tertiary py-6 pl-4 md:p-16 md:pr-8 fixed top-1/2 left-1/2 -translate-1/2 z-50 md:rounded-2xl w-full md:max-w-200 h-screen md:max-h-180">
        <div className="pr-4 md:pr-8 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
          <Dialog.Title className="text-xl font-semibold line-clamp-3">
            {team?.name}
          </Dialog.Title>
          <Dialog.Description className="hidden">
            Informações sobre a equipe
          </Dialog.Description>
          <Dialog.Close className="absolute top-2 right-2 md:top-4 md:right-4">
            <GoX size={24} />
          </Dialog.Close>
          <span className="text-sm font-light">
            Criado em:{" "}
            {team &&
              new Intl.DateTimeFormat("pt-BR").format(new Date(team.createdAt))}
          </span>
          <p className="text-justify mt-8">{team?.description}</p>

          <Accordion.Root
            className="bg-background-primary rounded-lg mt-8"
            type="single"
            collapsible
          >
            <AccordionItem accordionTitle="Membros" itemValue="item-1">
              {team?.teamMembers.map((teamMember) => (
                <li key={teamMember.id}>{teamMember.user.name}</li>
              ))}
            </AccordionItem>

            <AccordionItem accordionTitle="Tarefas" itemValue="item-2">
              {team?.tasks
                .slice()
                .sort((a, b) => {
                  const isACompleted = a.status === "completed"
                  const isBCompleted = b.status === "completed"

                  return Number(isACompleted) - Number(isBCompleted)
                })
                .map((task) => (
                  <li key={task.id}>
                    <TaskStatus status={task.status} />
                    {task.id} - {task.title}
                  </li>
                ))}
            </AccordionItem>
          </Accordion.Root>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
