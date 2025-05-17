import { Button } from "@/components/Button"
import { ButtonText } from "@/components/ButtonText"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { TextArea } from "@/components/TextArea"
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router"
import { z, ZodError } from "zod"

const newTeamSchema = z.object({
  name: z.string().trim().min(1, "O nome da equipe é obrigatório"),
  description: z.string(),
})

export function NewTeam() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const newTeam = newTeamSchema.parse({
        name,
        description,
      })

      await api.post("/teams", newTeam)

      alert("Cadastrado com sucesso!")
      navigate("/teams")
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      alert("Não foi possível cadastrar!")
    }
  }

  return (
    <>
      <ButtonText />
      <form
        className="flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-8"
        onSubmit={onSubmit}
      >
        <PageTitle title="Nova equipe" />

        <div className="lg:w-1/2">
          <Input
            label="Nome"
            placeholder="De um breve nome para a equipe"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <TextArea
          label="Descrição"
          placeholder="Descreva com detalhes a equipe"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button size="medium" className="md:self-end" type="submit">
          Salvar
        </Button>
      </form>
    </>
  )
}
