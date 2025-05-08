import { Button } from "@/components/Button"
import { ButtonText } from "@/components/ButtonText"
import { PageTitle } from "@/components/PageTitle"
import { Select } from "@/components/Select"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

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

export function TaskDetails() {
  const [status, setStatus] = useState<"pending" | "inProgress" | "completed">(
    "pending"
  )

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as "pending" | "inProgress" | "completed"
    setStatus(value)
  }

  return (
    <>
      <ButtonText />

      <div className="lg:flex items-start justify-between mt-4 lg:mt-8">
        <div>
          <PageTitle title="Formatar computadores" />
          <span className="text-sm font-light">Criado em: 16/02/2025</span>
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
            onChange={handleChange}
          >
            <option value="pending">Pendente</option>
            <option value="inProgress">Em progresso</option>
            <option value="completed">Concluído</option>
          </Select>
        </div>
      </div>
      <p className="text-justify mt-4 lg:mt-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <span className="inline-block mt-4 border-2 border-priority-medium rounded-sm p-2 bg-background-tertiary text-sm">
        Média
      </span>
      <ul className="flex flex-col gap-2 mt-8 lg:mt-8">
        <li>
          <p className="font-light">
            <span className="font-medium">ID:</span>{" "}
            e6149176-e649-4c35-86c2-140ebbdd636f
          </p>
        </li>
        <li>
          <p className="font-light">
            <span className="font-medium">Equipe:</span> Manutenção de
            computadores
          </p>
        </li>
        <li>
          <p className="font-light">
            <span className="font-medium">Responsável pela tarefa:</span> Arthur
            Silva
          </p>
        </li>
        <li>
          <p className="font-light">
            <span className="font-medium">Última atualização:</span> 17/02/2025
          </p>
        </li>
      </ul>
      <hr className="border-background-tertiary my-8" />
      <div className="flex flex-col md:flex-row md:justify-end gap-2 lg:gap-8">
        <Button color="secondary" size="medium">
          Excluir tarefa
        </Button>
        <Button size="medium">Editar</Button>
      </div>
    </>
  )
}
