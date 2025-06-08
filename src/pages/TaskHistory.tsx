import { Input } from "@/components/Input"
import { LogsTableRow } from "@/components/LogsTableRow"
import { PageTitle } from "@/components/PageTitle"
import { useEffect, useState } from "react"
import { IoIosSearch } from "react-icons/io"
import { api } from "@/services/api"

type TaskHistory = {
  id: string
  taskId: string
  changedBy: string
  oldStatus: string
  newStatus: "pending" | "inProgress" | "completed"
  changedAt: string
  task: Task
  user: User
}

type Task = {
  title: string
}

type User = {
  name: string
}

export function TaskHistory() {
  const [taskHistories, setTaskHistories] = useState<TaskHistory[]>()

  async function fetchTaskHistories() {
    const { data } = await api.get<TaskHistory[]>("/task-history")

    setTaskHistories(data)
  }

  useEffect(() => {
    fetchTaskHistories()
  }, [])

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 lg:flex lg:justify-between">
        <PageTitle title="Histórico de tarefas" className="text-nowrap" />
        <Input
          placeholder="Pesquise um log de tarefa"
          className="lg:max-w-180 w-full col-span-2"
          icon={IoIosSearch}
        />
      </div>
      <div className="mt-4 lg:mt-8 overflow-x-auto">
        <table className="text-sm lg:text-base w-full min-w-270 border-separate border-spacing-y-2 text-nowrap">
          <thead className="bg-brand/20">
            <tr>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2">
                Tarefa
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2">
                Alterado por
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2">
                Status
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2 w-24">
                Alterado em
              </th>
            </tr>
          </thead>
          <tbody>
            {taskHistories?.map((taskHistory) => (
              <LogsTableRow
                key={taskHistory.id}
                name={taskHistory.task.title}
                changedBy={taskHistory.user.name}
                status={taskHistory.newStatus}
                updatedAt={new Date(taskHistory.changedAt).toLocaleDateString(
                  "pt-BR"
                )}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
