import { twMerge } from "tailwind-merge"

const variants = {
  primary: {
    color: "bg-background-tertiary",
  },
  secondary: {
    color: "bg-background-tertiary lg:bg-background-secondary",
  },
}

type Props = React.ComponentProps<"textarea"> & {
  variant?: "primary" | "secondary"
  label?: string
  className?: string
}

export function TextArea({
  variant = "primary",
  label,
  className,
  ...rest
}: Props) {
  return (
    <div className={twMerge("grid gap-2", className)}>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <textarea
        className={`${variants[variant].color} rounded-lg p-3.5 focus-within:shadow-[0_0_0_1px] shadow-text-secondary h-69 w-full placeholder:text-text-secondary/20 resize-none overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent`}
        {...rest}
      />
    </div>
  )
}
