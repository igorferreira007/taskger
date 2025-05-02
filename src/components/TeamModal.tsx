import * as Dialog from "@radix-ui/react-dialog"
import * as Accordion from "@radix-ui/react-accordion"
import { GoX } from "react-icons/go"

export function TeamModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/50 fixed w-full h-screen inset-0 z-50" />
      <Dialog.Content className="bg-background-tertiary py-6 pl-4 md:p-16 md:pr-8 fixed top-1/2 left-1/2 -translate-1/2 z-50 md:rounded-2xl w-full md:max-w-200 h-screen md:max-h-180">
        <div className="pr-4 md:pr-8 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
          <Dialog.Title className="text-xl font-semibold line-clamp-3">
            Equipe de Desenvolvimento e suporte
          </Dialog.Title>
          <Dialog.Description className="hidden">
            Informações sobre a equipe
          </Dialog.Description>
          <Dialog.Close className="absolute top-2 right-2 md:top-4 md:right-4">
            <GoX size={24} />
          </Dialog.Close>
          <span className="text-sm font-light">Criado em: 16/02/2025</span>
          <p className="text-justify mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <Accordion.Root
            className="bg-background-primary rounded-lg mt-8"
            type="single"
            collapsible
          >
            <Accordion.Item
              className="AccordionItem border-b border-background-tertiary last:border-b-0"
              value="item-1"
            >
              <Accordion.AccordionTrigger asChild>
                <button className="font-semibold w-full text-start p-4 pt-4 shadow-none! data-[state=open]:border-b border-background-tertiary">
                  Membros
                </button>
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="p-4">
                <ul className="font-light space-y-4">
                  <li>Igor Ferreira de Macedo</li>
                  <li>Igor Ferreira de Macedo</li>
                  <li>Igor Ferreira de Macedo</li>
                  <li>Igor Ferreira de Macedo</li>
                  <li>Igor Ferreira de Macedo</li>
                </ul>
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item
              className="AccordionItem border-b border-background-tertiary last:border-b-0"
              value="item-2"
            >
              <Accordion.AccordionTrigger asChild>
                <button className="font-semibold w-full text-start p-4 pt-4 shadow-none! data-[state=open]:border-b border-background-tertiary">
                  Tarefas
                </button>
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="p-4">
                <ul className="font-light space-y-4">
                  <li>8b5044d53ebf - Formatar computadores</li>
                  <li>8b5044d53ebf - Instalar o pacote Office</li>
                  <li>8b5044d53ebf - Liberar licenças</li>
                  <li>8b5044d53ebf - Formatar computadores</li>
                  <li>8b5044d53ebf - Instalar o pacote Office</li>
                  <li>8b5044d53ebf - Liberar licenças</li>
                </ul>
              </Accordion.AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
