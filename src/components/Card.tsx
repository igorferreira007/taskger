import { FaUser } from "react-icons/fa"
import { twMerge } from "tailwind-merge"

type Props = {
  title: string
  status: "pending" | "inProgress" | "completed"
  avatar?: string
  responsible: string
  team: string
  priority: "low" | "medium" | "high"
}

const variants = {
  status: {
    pending: {
      title: "Pendente",
      color: "bg-status-pending",
    },
    inProgress: {
      title: "Em progresso",
      color: "bg-status-progress",
    },
    completed: {
      title: "Concluído",
      color: "bg-status-completed",
    },
  },
  priority: {
    low: {
      title: "Baixa",
      color: "border-priority-low",
    },
    medium: {
      title: "Media",
      color: "border-priority-medium",
    },
    high: {
      title: "Alta",
      color: "border-priority-high",
    },
  },
}

export function Card({
  title,
  status,
  avatar,
  responsible,
  team,
  priority,
}: Props) {
  const [firstName, ...surname] = responsible.split(" ")
  const lastName = surname[surname.length - 1]

  return (
    <div
      className={twMerge(
        "bg-background-tertiary border-2 rounded-sm w-full h-37 p-4 flex flex-col gap-2 shadow-[0_4px_4px_0] shadow-black/25 cursor-pointer hover:brightness-110 transition",
        variants.priority[priority].color
      )}
    >
      <h3 className="font-semibold grow line-clamp-2" title={title}>
        {title}
      </h3>
      <div>
        <span
          className={twMerge(
            "inline-block w-3 h-3 rounded-full",
            variants.status[status].color
          )}
        />
        <span className="text-sm ml-2">{variants.status[status].title}</span>
      </div>
      <footer className="flex items-center gap-2 text-sm font-light">
        {avatar ? (
          <img
            src={avatar}
            className="w-6 h-6 object-cover rounded-full border border-border-secondary"
          />
        ) : (
          <FaUser className="w-6 h-6 object-cover rounded-full border border-border-secondary" />
        )}
        <span className="line-clamp-1 grow" title={responsible}>
          {`${firstName} ${lastName}`}
        </span>
        <span className="text-nowrap" title={team}>
          {team.length > 10 ? `${team.slice(0, 15)}...` : team}
        </span>
      </footer>
    </div>
  )
}
