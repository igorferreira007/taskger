import { Select } from "./Select"

type Props = {
  name: string
  email: string
  role: string
  team: string
  startDate: string
}

export function MemberTableRow({ name, email, role, team, startDate }: Props) {
  return (
    <tr className="bg-background-tertiary h-12">
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        {name}
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2 max-w-60 overflow-hidden">
        {email}
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        <Select selectSize="xs" defaultValue={role}>
          <option value="member">Membro</option>
          <option value="admin">Administrador</option>
        </Select>
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        <Select selectSize="xs" defaultValue={team}>
          <option value="support">Suporte</option>
          <option value="development">Desenvolvimento</option>
        </Select>
      </td>
      <td className="first:rounded-l-lg last:rounded-r-lg first:pl-6 last:pr-6 px-2">
        {startDate}
      </td>
    </tr>
  )
}
