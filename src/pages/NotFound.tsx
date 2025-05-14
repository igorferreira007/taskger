export function NotFound() {
  return (
    <div className="h-screen grid place-content-center">
      <h1 className="font-semibold text-2xl">Ops, essa página não existe!</h1>
      <a href="/" className="text-sm font-medium text-brand mx-auto mt-8 w-fit">
        Voltar para o início
      </a>
    </div>
  )
}
