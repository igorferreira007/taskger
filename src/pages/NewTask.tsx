import { Button } from "@/components/Button"
import { ButtonText } from "@/components/ButtonText"
import { Input } from "@/components/Input"
import { PageTitle } from "@/components/PageTitle"
import { Select } from "@/components/Select"
import { TextArea } from "@/components/TextArea"

export function NewTask() {
  return (
    <>
      <ButtonText />
      <form
        className="flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-8"
        onSubmit={(e: React.FormEvent) => e.preventDefault()}
      >
        <PageTitle title="Nova tarefa" />

        <div className="flex flex-col lg:flex-row gap-8">
          <Input
            label="Título"
            className="grow-5"
            placeholder="De um breve título"
            id="title"
            required
          />
          <Select label="Prioridade" className="grow-2" id="priority">
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </Select>
          <Select label="Equipe" className="grow-3" id="team" required>
            <option value="">Selecione</option>
            <option value="team1">Equipe 1</option>
            <option value="team2">Equipe 2</option>
          </Select>
        </div>
        <TextArea
          label="Descrição"
          placeholder="Descreva com detalhes a tarefa"
          id="description"
          required
        />
        <Button size="medium" className="md:self-end" type="submit">
          Salvar
        </Button>
      </form>
    </>
  )
}
