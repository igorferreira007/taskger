import { twMerge } from "tailwind-merge"

type Props = React.ComponentProps<"select"> & {
  label?: string
  selectSize?: "big" | "small"
}

const variants = {
  size: {
    big: "h-12 px-3.5 rounded-lg",
    small: "px-2 py-1 rounded-sm",
  },
}

export function Select({
  children,
  label,
  selectSize = "big",
  className,
}: Props) {
  return (
    <div className={twMerge("flex flex-col gap-2", className)}>
      {label && <label>{label}</label>}
      <select
        name="status"
        id="status"
        className={twMerge(
          "bg-background-tertiary min-w-max w-full",
          variants.size[selectSize]
        )}
      >
        {children}
      </select>
    </div>
  )
}
