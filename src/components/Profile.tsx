import profilePicture from "@/assets/Igor.png"
import { twMerge } from "tailwind-merge"

type Props = React.ComponentProps<"div">

export function Profile({ className }: Props) {
  return (
    <div className={twMerge("flex gap-2", className)}>
      <div className="flex flex-col items-end justify-center">
        <a href="" className="font-semibold">
          Igor Ferreira
        </a>
        <button className="text-sm text-text-tertiary">Sair</button>
      </div>
      <img
        src={profilePicture}
        className="w-16 h-16 object-cover rounded-full border border-background-tertiary"
      />
    </div>
  )
}
