import { twMerge } from "tailwind-merge"

type Props = React.ComponentProps<"button"> & {
  color?: "primary" | "secondary"
  size?: "full" | "small" | "medium"
  isLoading?: boolean
  className?: string
}

const variants = {
  color: {
    primary: "bg-brand",
    secondary: "bg-background-tertiary",
  },
  size: {
    full: "w-full px-8",
    small: "px-8",
    medium: "px-16",
  },
}

export function Button({
  children,
  color = "primary",
  size = "full",
  isLoading = false,
  className,
  ...rest
}: Props) {
  return (
    <button
      disabled={isLoading}
      className={twMerge(
        "h-12 rounded-lg text-text-primary font-medium enabled:hover:brightness-90 transition flex items-center justify-center gap-2 text-nowrap text-sm disabled:opacity-50",
        variants.color[color],
        variants.size[size],
        isLoading && "cursor-progress!",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
