import { PiKanban, PiUsersFour } from "react-icons/pi"

export function TeamCard() {
  return (
    <div className="bg-background-tertiary rounded-lg overflow-hidden h-71 flex flex-col">
      <main className="p-4 grow flex flex-col justify-between">
        <h1 className="text-xl font-semibold line-clamp-3">
          Equipe 2 Infraestrutura e tecnologia
        </h1>
        <p className="line-clamp-3">
          Team description, lorem is simply dummy text of the printing and
          typesetting industry. Team description, lorem is simply dummy text of
          the printing and typesetting industry.
        </p>
      </main>
      <footer className="bg-brand/20 p-4">
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <PiUsersFour size={24} />
            <span className="text-sm font-light">6 membros</span>
          </li>
          <li className="flex items-center gap-2">
            <PiKanban size={24} />
            <span className="text-sm font-light">11 tarefas</span>
          </li>
        </ul>
      </footer>
    </div>
  )
}
