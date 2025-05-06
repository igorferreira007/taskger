import { TaskStatus } from "./TaskStatus"

type Props = {
  name: string
  responsible: string
  status: "pending" | "inProgress" | "completed"
  updatedAt: string
}

export function LogsTableRow({ name, responsible, status, updatedAt }: Props) {
  return (
    <tr className="bg-background-tertiary h-12">
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        {name}
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        {responsible}
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        <TaskStatus status={status} />
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        {updatedAt}
      </td>
    </tr>
  )
}
