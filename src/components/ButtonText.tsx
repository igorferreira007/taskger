import { GoArrowLeft } from "react-icons/go"
import { useNavigate } from "react-router"

export function ButtonText() {
  const navigate = useNavigate()

  return (
    <button
      className="flex items-center gap-2 hover:text-white transition"
      onClick={() => navigate(-1)}
    >
      <GoArrowLeft /> Voltar
    </button>
  )
}
