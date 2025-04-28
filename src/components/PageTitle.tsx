type Props = {
  title: string
}

export function PageTitle({ title }: Props) {
  return <h1 className="text-2xl font-semibold text-nowrap">{title}</h1>
}
