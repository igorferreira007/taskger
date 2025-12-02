import { MdOutlineClose } from "react-icons/md"
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"
import { Profile } from "./Profile"
import { useAuth } from "@/hooks/useAuth"

export function Menu() {
  const { session } = useAuth()

  return (
    <SheetContent className="bg-background-primary border-none w-full data-[state=open]:duration-300">
      <SheetHeader className="border-b py-3 border-background-tertiary flex-row items-center justify-between">
        <SheetTitle className="font-bold text-text-secondary">Menu</SheetTitle>
        <SheetClose asChild>
          <button>
            <MdOutlineClose size={32} />
          </button>
        </SheetClose>
        <SheetDescription className="sr-only">
          Navegue pelas seções do menu lateral
        </SheetDescription>
      </SheetHeader>
      <nav className="flex flex-col font-medium px-4 flex-auto overflow-y-auto">
        <a href="/" className="py-2.5 border-b border-background-tertiary">
          Tarefas
        </a>
        {session?.user.role === "admin" && (
          <a
            href="/teams"
            className="py-2.5 border-b border-background-tertiary"
          >
            Equipes
          </a>
        )}
        {session?.user.role === "admin" && (
          <a
            href="/members"
            className="py-2.5 border-b border-background-tertiary"
          >
            Membros
          </a>
        )}
        <a
          href="/task-history"
          className="py-2.5 border-b border-background-tertiary"
        >
          Histórico
        </a>
      </nav>

      <SheetFooter className="pt-0">
        <Profile className="ml-auto" />
      </SheetFooter>
    </SheetContent>
  )
}
