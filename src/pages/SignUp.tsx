import { AuthForm } from "@/components/AuthForm"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import logo from "../assets/logo.svg"

import { z, ZodError } from "zod"
import { useState } from "react"
import { api } from "@/services/api"
import { useNavigate } from "react-router"
import { AxiosError } from "axios"

const signUpSchema = z.object({
  name: z.string().trim().min(1, "Informe o nome"),
  email: z.string().email("E-mail inválido"),
  password: z.string().trim().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        name,
        email,
        password,
      })

      await api.post("/users", data)

      if (confirm("Cadastrado com sucesso. Ir para tela de entrar?")) {
        navigate("/")
      }
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      alert("Não foi possível cadastrar!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="lg:flex flex-row-reverse justify-between items-center max-w-7xl px-4 mx-auto min-h-screen pb-16 lg:pb-0">
      <div className="flex items-center gap-3 p-4 justify-center">
        <img src={logo} className="w-8 h-8 lg:w-48 lg:h-48" />
        <span className="text-logo font-spacegrotesk text-2xl lg:text-[4rem] font-bold">
          Taskger
        </span>
      </div>
      <AuthForm onSubmit={onSubmit}>
        <h1 className="text-center font-semibold text-2xl lg:text-[2rem] text-text-primary">
          Crie sua conta
        </h1>
        <Input
          type="text"
          label="Seu nome"
          variant="secondary"
          id="name"
          placeholder="Nome Sobrenome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          label="Email"
          variant="secondary"
          id="email"
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Senha"
          variant="secondary"
          id="password"
          placeholder="Mínimo de 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" isLoading={isLoading}>
          Cadastrar
        </Button>
        <a href="/" className="text-text-primary text-sm mx-auto">
          Já tenho uma conta
        </a>
      </AuthForm>
    </div>
  )
}
