import { twMerge } from "tailwind-merge"

type Props = React.ComponentProps<"select"> & {
  label?: string
  selectSize?: "big" | "small" | "xs"
  color?: "transparent" | "default"
}

const variants = {
  size: {
    big: "h-12 px-3.5 rounded-lg",
    small: "px-2 py-1 rounded-sm",
    xs: "px-0 rounded-sm",
  },
  color: {
    transparent: "bg-background-primary",
    default: "bg-background-tertiary",
  },
}

export function Select({
  children,
  label,
  selectSize = "big",
  color = "default",
  className,
  ...rest
}: Props) {
  return (
    <div className={twMerge("flex flex-col gap-2", className)}>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <select
        className={twMerge(
          "min-w-max w-full",
          variants.size[selectSize],
          variants.color[color]
        )}
        {...rest}
      >
        {children}
      </select>
    </div>
  )
}
