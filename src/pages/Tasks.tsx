import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { Pagination } from "@/components/Pagination"
import { Select } from "@/components/Select"
import { GoPlus } from "react-icons/go"
import { IoIosSearch } from "react-icons/io"

import profilePicture from "@/assets/Igor.png"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { api } from "@/services/api"

export type Task = {
  id: string
  title: string
  description: string
  status: "pending" | "inProgress" | "completed"
  priority: "low" | "medium" | "high"
  assignedTo: string | null
  teamId: string
  createdAt: string
  updatedAt: string
  user?: User
  team: Team
}

type TaskPaginationAPIResponse = {
  tasks: Task[]
  pagination: {
    page: number
    perPage: number
    totalPages: number
    totalRecords: number
  }
}

type User = {
  name: string
}

type Team = {
  name: string
}

const PER_PAGE = 20

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>()
  const [searchTask, setSearchTask] = useState("")
  const [status, setStatus] = useState("")
  const [priority, setPriority] = useState("")
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const navigate = useNavigate()

  function handleButtonOnClick() {
    navigate("/new-task")
  }

  function handleCardOnClick(id: string) {
    navigate(`/task-details/${id}`)
  }

  async function fetchTasks() {
    let url = "/tasks"

    if (searchTask || status || priority || page) {
      const params = new URLSearchParams()
      if (searchTask) params.append("title", searchTask)
      if (status) params.append("status", status)
      if (priority) params.append("priority", priority)
      if (page) params.append("page", String(page))
      if (PER_PAGE) params.append("perPage", String(PER_PAGE))
      url += `?${params.toString()}`
    }

    const { data } = await api.get<TaskPaginationAPIResponse>(url)
    setTasks(data.tasks)
    setTotalPage(data.pagination.totalPages)
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevState) => {
      if (action === "next" && prevState < totalPage) {
        return prevState + 1
      }

      if (action === "previous" && prevState > 1) {
        return prevState - 1
      }

      return prevState
    })
  }

  useEffect(() => {
    fetchTasks()
  }, [tasks])

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 lg:flex lg:justify-between">
        <PageTitle title="Todas tarefas" className="text-nowrap" />
        <Input
          placeholder="Pesquise uma tarefa"
          className="lg:max-w-180 w-full col-span-2"
          icon={IoIosSearch}
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
        />

        <Button
          size="small"
          className="[@media(max-width:1023px)]:w-12 [@media(max-width:1023px)]:p-0 ml-auto lg:m-0 col-start-2 col-end-3 row-start-1 row-end-2"
          onClick={handleButtonOnClick}
        >
          <GoPlus size={24} />
          <span className="hidden lg:block">Nova tarefa</span>
        </Button>
      </div>
      <div className="flex gap-4 mt-4 lg:mt-8 max-w-full overflow-x-auto lg:overflow-visible lg:justify-end">
        <Select
          label="Status:"
          selectSize="small"
          className="lg:flex-row lg:items-center"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="pending">Pendente</option>
          <option value="inProgress">Em progresso</option>
          <option value="completed">Concluído</option>
        </Select>
        <Select
          label="Prioridade:"
          selectSize="small"
          className="lg:flex-row lg:items-center"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </Select>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4 mt-4">
        {tasks &&
          tasks.map((task) => (
            <Card
              key={task.id}
              title={task.title}
              status={task.status}
              responsible={task.user?.name ? task.user.name : "Sem responsável"}
              team={task.team.name}
              priority={task.priority}
              avatar={profilePicture}
              onClick={() => handleCardOnClick(task.id)}
            />
          ))}
      </div>
      <Pagination
        current={page}
        total={totalPage}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </>
  )
}
