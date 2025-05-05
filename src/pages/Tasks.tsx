import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { Pagination } from "@/components/Pagination"
import { Select } from "@/components/Select"
import { GoPlus } from "react-icons/go"
import { IoIosSearch } from "react-icons/io"

import profilePicture from "@/assets/Igor.png"

export function Tasks() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 lg:flex lg:justify-between">
        <PageTitle title="Todas tarefas" className="text-nowrap" />
        <Input
          placeholder="Pesquise uma tarefa"
          className="lg:max-w-180 w-full col-span-2"
          icon={IoIosSearch}
        />

        <Button
          size="small"
          className="[@media(max-width:1023px)]:w-12 [@media(max-width:1023px)]:p-0 ml-auto lg:m-0 col-start-2 col-end-3 row-start-1 row-end-2"
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
        >
          <option value="all">Todos</option>
          <option value="pending">Pendente</option>
          <option value="inProgress">Em progresso</option>
          <option value="completed">Concluído</option>
        </Select>
        <Select
          label="Prioridade:"
          selectSize="small"
          className="lg:flex-row lg:items-center"
        >
          <option value="all">Todos</option>
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </Select>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4 mt-4">
        {Array(24)
          .fill(null)
          .map((_, index) => (
            <Card
              key={index}
              title="Formatar computadores da sala de reunião"
              status="inProgress"
              responsible="Arthur Silva Ferreira de Macedo Oliveiraaaaaaaaaaa"
              team="Equipe 1 texto apenas para exceder o numero de linhas"
              priority="low"
              avatar={profilePicture}
            />
          ))}
      </div>
      <Pagination />
    </>
  )
}
