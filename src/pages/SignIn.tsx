import { AuthForm } from "@/components/AuthForm"
import logo from "../assets/logo.svg"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { z, ZodError } from "zod"
import { useState } from "react"
import { AxiosError } from "axios"
import { api } from "@/services/api"
import { useAuth } from "@/hooks/useAuth"

const signUpSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().trim().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState("")

  const auth = useAuth()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        email,
        password,
      })

      const { data: response } = await api.post("/sessions", data)

      auth.save(response)
      setMessageError("")
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        setMessageError(error.issues[0].message)
        return
      }

      if (error instanceof AxiosError) {
        setMessageError(error.response?.data.message)
        return
      }

      setMessageError(
        "Problemas ao tentar logar, aguarde alguns segundos e tente novamente."
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="lg:flex justify-between items-center max-w-7xl px-4 mx-auto min-h-screen pb-16 lg:pb-0">
      <div className="flex items-center gap-3 p-4 justify-center">
        <img src={logo} className="w-8 h-8 lg:w-48 lg:h-48" />
        <span className="text-logo font-spacegrotesk text-2xl lg:text-[4rem] font-bold">
          Taskger
        </span>
      </div>
      <AuthForm onSubmit={onSubmit}>
        <h1 className="text-center font-semibold text-2xl lg:text-[2rem] text-text-primary">
          Faça login
        </h1>
        <Input
          required
          type="email"
          label="Email"
          variant="secondary"
          id="email"
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          type="password"
          label="Senha"
          variant="secondary"
          id="password"
          placeholder="123456"
          onChange={(e) => setPassword(e.target.value)}
        />
        {messageError && (
          <p className="text-xs md:text-sm text-center bg-red-700 font-medium p-2 rounded-lg">
            {messageError}
          </p>
        )}
        <Button type="submit" isLoading={isLoading}>
          Entrar
        </Button>
        <a href="/sign-up" className="text-text-primary text-sm mx-auto">
          Criar conta
        </a>
      </AuthForm>
    </div>
  )
}
