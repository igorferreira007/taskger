import profilePicture from "@/assets/Igor.png"
import { useAuth } from "@/hooks/useAuth"
import { Link } from "react-router"
import { twMerge } from "tailwind-merge"

type Props = React.ComponentProps<"div">

export function Profile({ className }: Props) {
  const { remove, session } = useAuth()

  return (
    <div className={twMerge("flex gap-2", className)}>
      <div className="flex flex-col items-end justify-center">
        <Link
          to="/profile"
          className="font-semibold"
          title="Ir para a página de perfil"
        >
          {session?.user.name}
        </Link>
        <button
          title="Sair do Taskger"
          className="text-sm text-text-tertiary cursor-pointer"
          onClick={() => remove()}
        >
          Sair
        </button>
      </div>
      <Link to="/profile" title="Ir para a página de perfil">
        <img
          src={profilePicture}
          className="w-16 h-16 object-cover rounded-full border border-background-tertiary"
        />
      </Link>
    </div>
  )
}
