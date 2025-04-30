import { Button } from "@/components/Button"
import { ButtonText } from "@/components/ButtonText"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { TextArea } from "@/components/TextArea"

export function NewTeam() {
  return (
    <>
      <ButtonText />
      <form
        className="flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-8"
        onSubmit={(e: React.FormEvent) => e.preventDefault()}
      >
        <PageTitle title="Nova equipe" />

        <div className="lg:w-1/2">
          <Input
            label="Nome"
            placeholder="De um breve nome para a equipe"
            required
          />
        </div>
        <TextArea
          label="Descrição"
          placeholder="Descreva com detalhes a equipe"
          required
        />
        <Button size="medium" className="md:self-end" type="submit">
          Salvar
        </Button>
      </form>
    </>
  )
}
