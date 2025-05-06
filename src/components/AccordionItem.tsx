import * as Accordion from "@radix-ui/react-accordion"
import { GoChevronDown } from "react-icons/go"

type Props = React.ComponentProps<"ul"> & {
  accordionTitle: string
  itemValue: string
}

export function AccordionItem({ accordionTitle, itemValue, children }: Props) {
  return (
    <Accordion.Item
      className="AccordionItem border-b border-background-tertiary last:border-b-0"
      value={itemValue}
    >
      <Accordion.AccordionTrigger asChild>
        <button className="font-semibold w-full text-start p-4 pt-4 shadow-none! data-[state=open]:border-b border-background-tertiary flex items-center justify-between group">
          {accordionTitle}
          <GoChevronDown
            size={24}
            className="group-data-[state=open]:rotate-180 transition-transform duration-200"
          />
        </button>
      </Accordion.AccordionTrigger>
      <Accordion.AccordionContent className="p-4">
        <ul className="font-light space-y-4">{children}</ul>
      </Accordion.AccordionContent>
    </Accordion.Item>
  )
}
