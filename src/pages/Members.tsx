import { Input } from "@/components/Input"
import { MemberTableRow } from "@/components/MemberTableRow"
import { PageTitle } from "@/components/PageTitle"
import { IoIosSearch } from "react-icons/io"

export function Members() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 lg:flex lg:justify-between">
        <PageTitle title="Todos membros" className="text-nowrap" />
        <Input
          placeholder="Pesquise um membro"
          className="lg:max-w-180 w-full col-span-2"
          icon={IoIosSearch}
        />
      </div>
      <div className="mt-4 lg:mt-8 overflow-x-auto">
        <table className="text-sm lg:text-base w-full min-w-270 border-separate border-spacing-y-2 text-nowrap">
          <thead className="bg-brand/20">
            <tr>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2 w-full">
                Nome
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2">
                Email
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2">
                Cargo
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2">
                Equipe
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 py-3 px-2 w-34">
                Data de entrada
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(16)
              .fill(null)
              .map((_, index) => (
                <MemberTableRow
                  key={index}
                  name="Igor Ferreira de Macedo Oliveira dos Santos Neto"
                  email="igorferreira.dev@email.com"
                  role="member"
                  team="development"
                  startDate="16/02/2025"
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
