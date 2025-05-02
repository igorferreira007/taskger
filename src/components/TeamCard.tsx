import React from "react"
import { PiKanban, PiUsersFour } from "react-icons/pi"
import * as Dialog from "@radix-ui/react-dialog"
import { TeamModal } from "./TeamModal"

type Props = React.ComponentProps<"button"> & {
  teamName: string
  description: string
  numberOfMembers: number
  numberOfTasks: number
}

export function TeamCard({
  teamName,
  description,
  numberOfMembers,
  numberOfTasks,
  ...rest
}: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="bg-background-tertiary rounded-lg overflow-hidden h-71 flex flex-col shadow-[0_4px_4px_0] shadow-black/25 cursor-pointer hover:brightness-110 transition"
          {...rest}
        >
          <main className="p-4 grow flex flex-col justify-between text-start">
            <h1 className="text-xl font-semibold line-clamp-3">{teamName}</h1>
            <p className="line-clamp-3">{description}</p>
          </main>
          <footer className="bg-brand/20 p-4">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <PiUsersFour size={24} />
                <span className="text-sm font-light">
                  {numberOfMembers} membro{numberOfMembers > 1 && "s"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <PiKanban size={24} />
                <span className="text-sm font-light">
                  {numberOfTasks} tarefa{numberOfTasks > 1 && "s"}
                </span>
              </li>
            </ul>
          </footer>
        </button>
      </Dialog.Trigger>
      <TeamModal />
    </Dialog.Root>
  )
}
