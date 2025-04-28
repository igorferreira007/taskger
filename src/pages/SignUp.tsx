import { AuthForm } from "@/components/AuthForm"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import logo from "../assets/logo.svg"

export function SignUp() {
  return (
    <div className="lg:flex flex-row-reverse justify-between items-center max-w-7xl px-4 mx-auto min-h-screen pb-16 lg:pb-0">
      <div className="flex items-center gap-3 p-4 justify-center">
        <img src={logo} className="w-8 h-8 lg:w-48 lg:h-48" />
        <span className="text-logo font-spacegrotesk text-2xl lg:text-[4rem] font-bold">
          Taskger
        </span>
      </div>
      <AuthForm>
        <h1 className="text-center font-semibold text-2xl lg:text-[2rem] text-text-primary">
          Crie sua conta
        </h1>
        <Input
          type="text"
          label="Seu nome"
          variant="secondary"
          id="name"
          placeholder="Nome Sobrenome"
        />
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
          placeholder="Mínimo de 6 caracteres"
        />
        <Button type="submit">Cadastrar</Button>
        <a href="/" className="text-text-primary text-sm mx-auto">
          Já tenho uma conta
        </a>
      </AuthForm>
    </div>
  )
}
