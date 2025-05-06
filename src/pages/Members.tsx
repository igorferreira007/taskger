import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { Select } from "@/components/Select"
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
        <table className="w-full min-w-270 border-separate border-spacing-y-2">
          <thead className="bg-brand/20">
            <tr>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 py-3 px-2">
                Nome
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 py-3 px-2">
                Email
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 py-3 px-2">
                Cargo
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 py-3 px-2">
                Equipe
              </th>
              <th className="font-normal text-start first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 py-3 px-2">
                Data de entrada
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-background-tertiary h-12">
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                Igor Ferreira de Macedoooooooooooooooooooooooooooooo
              </td>
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                igor@email.com
              </td>
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                <Select selectSize="xs">
                  <option value="member">Membro</option>
                  <option value="admin">Administrador</option>
                </Select>
              </td>
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                <Select selectSize="xs">
                  <option value="member">Administração</option>
                  <option value="admin">Desenvolvimento</option>
                </Select>
              </td>
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                16/02/2025
              </td>
            </tr>
            <tr className="bg-background-tertiary h-12">
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                Igor Ferreira de Macedoooooooooooooooooooooooooooooo
              </td>
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                igor@email.com
              </td>
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                <Select selectSize="xs">
                  <option value="member">Membro</option>
                  <option value="admin">Administrador</option>
                </Select>
              </td>
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                <Select selectSize="xs">
                  <option value="member">Administração</option>
                  <option value="admin">Desenvolvimento</option>
                </Select>
              </td>
              <td className="first:rounded-l-lg last:rounded-r-lg first:pl-10 last:pr-10 px-2">
                16/02/2025
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
