import { twMerge } from "tailwind-merge"

type Props = {
  status: "pending" | "inProgress" | "completed"
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
}

export function TaskStatus({ status }: Props) {
  return (
    <div>
      <span
        className={twMerge(
          "inline-block w-3 h-3 rounded-full",
          variants.status[status].color
        )}
      />
      <span className="text-sm ml-2">{variants.status[status].title}</span>
    </div>
  )
}
