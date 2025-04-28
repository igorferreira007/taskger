import { twMerge } from "tailwind-merge"

const variants = {
  primary: {
    color: "bg-background-tertiary",
  },
  secondary: {
    color: "bg-background-tertiary lg:bg-background-secondary",
  },
}

type Props = React.ComponentProps<"input"> & {
  variant?: "primary" | "secondary"
  icon?: React.ElementType
  label?: string
  className?: string
}

export function Input({
  variant = "primary",
  icon: Icon,
  label,
  className,
  ...rest
}: Props) {
  return (
    <div className={twMerge("grid gap-2", className)}>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <div
        className={`${variants[variant].color} flex items-center gap-4 rounded-lg px-3.5 focus-within:shadow-[0_0_0_1px] shadow-text-secondary`}
      >
        {Icon && <Icon size={24} className="text-text-secondary" />}
        <input
          type="text"
          className="h-12 w-full placeholder:text-text-secondary/20"
          {...rest}
        />
      </div>
    </div>
  )
}
