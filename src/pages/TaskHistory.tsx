import { Input } from "@/components/Input"
import { LogsTableRow } from "@/components/LogsTableRow"
import { PageTitle } from "@/components/PageTitle"
import { IoIosSearch } from "react-icons/io"

export function TaskHistory() {
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
                Responsável
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
            <LogsTableRow
              name="Formatar computadores da sala de reunião"
              responsible="Arthur Silva"
              status="inProgress"
              updatedAt="16/02/2025"
            />
            <LogsTableRow
              name="Trocar servidor"
              responsible="João Pedro"
              status="completed"
              updatedAt="16/02/2025"
            />
            <LogsTableRow
              name="Instalar Pacote Office"
              responsible="Arthur Silva"
              status="pending"
              updatedAt="16/02/2025"
            />
          </tbody>
        </table>
      </div>
    </>
  )
}
