import { AuthForm } from "@/components/AuthForm"
import logo from "../assets/logo.svg"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

export function SignIn() {
  return (
    <div className="lg:flex justify-between items-center max-w-7xl px-4 mx-auto min-h-screen pb-16 lg:pb-0">
      <div className="flex items-center gap-3 p-4 justify-center">
        <img src={logo} className="w-8 h-8 lg:w-48 lg:h-48" />
        <span className="text-logo font-spacegrotesk text-2xl lg:text-[4rem] font-bold">
          Taskger
        </span>
      </div>
      <AuthForm>
        <h1 className="text-center font-semibold text-2xl lg:text-[2rem] text-text-primary">
          Faça login
        </h1>
        <Input
          type="email"
          label="Email"
          variant="secondary"
          id="email"
          placeholder="example@email.com"
        />
        <Input
          type="password"
          label="Senha"
          variant="secondary"
          id="password"
          placeholder="123456"
        />
        <Button type="submit">Entrar</Button>
        <a href="/sign-up" className="text-text-primary text-sm mx-auto">
          Criar conta
        </a>
      </AuthForm>
    </div>
  )
}
