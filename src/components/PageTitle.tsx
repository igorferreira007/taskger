import { twMerge } from "tailwind-merge"

type Props = React.ComponentProps<"h1"> & {
  title: string
}

export function PageTitle({ title, className }: Props) {
  return (
    <h1 className={twMerge("text-2xl font-semibold", className)}>{title}</h1>
  )
}
