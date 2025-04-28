interface Props {
  children: React.ReactNode
}

export function AuthForm({ children }: Props) {
  return (
    <form className="lg:bg-background-tertiary rounded-2xl lg:p-16 mt-4 lg:m-0 max-w-119 w-full mx-auto grid gap-8">
      {children}
    </form>
  )
}
