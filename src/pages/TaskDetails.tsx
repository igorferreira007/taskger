import { Button } from "@/components/Button"
import { ButtonText } from "@/components/ButtonText"
import { PageTitle } from "@/components/PageTitle"
import { Select } from "@/components/Select"
import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { twMerge } from "tailwind-merge"
import { Task } from "./Tasks"
import { AxiosError } from "axios"
import { ZodError } from "zod"
import { useAuth } from "@/hooks/useAuth"

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
      title: "Média",
      color: "border-priority-medium",
    },
    high: {
      title: "Alta",
      color: "border-priority-high",
    },
  },
}

export function TaskDetails() {
  const [task, setTask] = useState<Task>()

  const navigate = useNavigate()
  const params = useParams<{ id: string }>()

  const { session } = useAuth()

  const [status, setStatus] = useState<"pending" | "inProgress" | "completed">(
    "pending"
  )
  const [selectValue, setSelectValue] = useState(status)

  async function handleChangeStatus(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const value = event.target.value as "inProgress" | "completed"

    try {
      const statusChanged = confirm(
        "Tem certeza que deseja alterar o status da tarefa?"
      )

      if (!statusChanged) {
        setSelectValue(status)
        return
      }

      await api.patch(`/tasks/${params.id}/status`, { status: value })
      setStatus(value)
      setSelectValue(value)
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        alert(error.issues[0].message)
        return
      }

      if (error instanceof AxiosError) {
        alert(error.response?.data.message)
        return
      }
    }
  }

  function handleEditButtonClick(id: string) {
    navigate(`/edit-task/${id}`)
  }

  async function handleDeleteTask() {
    try {
      const confirmDeletion = confirm(
        "Tem certeza que deseja excluir essa tarefa?"
      )

      if (!confirmDeletion) {
        return
      }

      await api.delete(`/tasks/${task?.id}`)
      navigate("/")
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      alert("Não foi possível excluir!")
    }
  }

  useEffect(() => {
    async function showTask() {
      const { data } = await api.get<Task>(`/tasks/${params.id}`)

      setTask(data)
      setStatus(data.status)
      setSelectValue(data.status)
    }

    showTask()
  }, [params.id, navigate])

  return (
    <>
      <ButtonText />

      {task && (
        <>
          <div className="lg:flex items-start justify-between mt-4 lg:mt-8">
            <div>
              <PageTitle title={task.title} />
              <span className="text-sm font-light">
                Criado em:{" "}
                {new Date(task.createdAt).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="flex items-center gap-2 max-lg:mt-4">
              <span
                className={twMerge(
                  "inline-block w-4 h-4 rounded-full",
                  variants.status[status].color
                )}
              />
              <Select
                selectSize="small"
                color="transparent"
                onChange={handleChangeStatus}
                value={selectValue}
              >
                <option value="pending" disabled>
                  Pendente
                </option>
                <option value="inProgress">Em progresso</option>
                <option value="completed">Concluído</option>
              </Select>
            </div>
          </div>
          <p className="text-justify mt-4 lg:mt-8">{task.description}</p>
          <span
            className={twMerge(
              "inline-block mt-4 border-2 rounded-sm p-2 bg-background-tertiary text-sm",
              variants.priority[task.priority].color
            )}
          >
            {variants.priority[task.priority].title}
          </span>
          <ul className="flex flex-col gap-2 mt-8 lg:mt-8">
            <li>
              <p className="font-light">
                <span className="font-medium">ID:</span> {task.id}
              </p>
            </li>
            <li>
              <p className="font-light">
                <span className="font-medium">Equipe: </span>
                {task.team.name}
              </p>
            </li>
            <li>
              <p className="font-light">
                <span className="font-medium">Responsável pela tarefa: </span>
                {task.user ? task.user.name : "Sem responsável"}
              </p>
            </li>
            <li>
              <p className="font-light">
                <span className="font-medium">Última atualização: </span>
                {new Date(task.updatedAt).toLocaleDateString("pt-BR")}
              </p>
            </li>
          </ul>
          <hr className="border-background-tertiary my-8" />
          {session?.user.role === "admin" && (
            <div className="flex flex-col md:flex-row md:justify-end gap-2 lg:gap-8">
              <Button
                color="secondary"
                size="medium"
                onClick={handleDeleteTask}
              >
                Excluir tarefa
              </Button>
              <Button
                size="medium"
                onClick={() => handleEditButtonClick(task.id)}
              >
                Editar
              </Button>
            </div>
          )}
        </>
      )}
    </>
  )
}
