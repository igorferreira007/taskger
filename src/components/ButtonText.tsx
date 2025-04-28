import { GoArrowLeft } from "react-icons/go"

export function ButtonText() {
  return (
    <button className="flex items-center gap-2 hover:text-white transition">
      <GoArrowLeft /> Voltar
    </button>
  )
}
