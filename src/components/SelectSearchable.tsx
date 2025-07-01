import { useState, ReactElement } from "react"
import { twMerge } from "tailwind-merge"

type Props = React.ComponentProps<"select"> & {
  label?: string
  selectSize?: "big" | "small" | "xs"
  color?: "transparent" | "default"
  children: ReactElement[] | ReactElement
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

export function SelectSearchable({
  label,
  selectSize = "big",
  color = "default",
  children,
  className,
  ...rest
}: Props) {
  const [search, setSearch] = useState("")

  // Transforma os children em array para poder filtrar
  const childrenArray = Array.isArray(children) ? children : [children]

  const filteredOptions = childrenArray.filter((child) => {
    if (child.type === "option") {
      const text = child.props.children?.toString().toLowerCase() || ""
      return text.includes(search.toLowerCase())
    }
    return true
  })

  return (
    <div className={twMerge("flex flex-col gap-2", className)}>
      {label && <label htmlFor={rest.id}>{label}</label>}

      <input
        type="text"
        placeholder="Buscar..."
        className={twMerge(
          "w-full border border-gray-300 rounded px-2 py-1 text-sm",
          variants.size[selectSize]
        )}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className={twMerge(
          "min-w-max w-full mt-2",
          variants.size[selectSize],
          variants.color[color]
        )}
        {...rest}
      >
        {filteredOptions}
      </select>
    </div>
  )
}
