import { NavLink } from "react-router"
import logo from "../assets/logo.svg"
import { IoMdMenu } from "react-icons/io"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Menu } from "./Menu"

const navLinks = [
  { to: "/", label: "Tarefas" },
  { to: "/teams", label: "Equipes" },
  { to: "/members", label: "Membros" },
  { to: "/logs", label: "Histórico" },
]

export function Header() {
  return (
    <header className="bg-background-primary border-b border-background-tertiary sticky top-0 z-50">
      <div className="py-3 px-4 lg:py-5 max-w-7xl w-full mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} className="w-8 h-8 lg:w-16 lg:h-16" />
          <span className="hidden lg:block text-logo font-spacegrotesk text-2xl font-bold">
            Taskger
          </span>
        </a>

        <ul className="hidden lg:flex gap-16">
          {navLinks.map(({ to, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-text-primary" : "text-text-tertiary"
                  } font-semibold hover:text-text-primary transition`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden">
              <IoMdMenu size={32} />
              <label className="sr-only">Menu</label>
            </button>
          </SheetTrigger>
          <Menu />
        </Sheet>

        <div className="hidden lg:flex gap-2">
          <div className="flex flex-col items-end justify-center">
            <a href="" className="font-semibold">
              Igor Ferreira
            </a>
            <button className="text-sm text-text-tertiary">Sair</button>
          </div>
          <img
            src="https://github.com/igorferreira007.png"
            className="w-16 h-16 object-cover rounded-full border border-background-tertiary"
          />
        </div>
      </div>
    </header>
  )
}
