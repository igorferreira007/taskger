import { PiCaretLeft, PiCaretRight } from "react-icons/pi"
import { twMerge } from "tailwind-merge"

type Props = {
  current: number
  total: number
  onNext: () => void
  onPrevious: () => void
}

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex items-center gap-2 w-40 mx-auto mt-4">
      <button
        className={twMerge(
          "bg-background-tertiary w-8 h-8 rounded-lg grid place-content-center text-2xl disabled:cursor-not-allowed! not-disabled:hover:brightness-110 transition",
          `${current === 1 && "bg-background-tertiary/25"}`
        )}
        onClick={onPrevious}
        disabled={current === 1}
      >
        <PiCaretLeft />
      </button>
      <span className="text-sm grow text-center">
        {current} / {total}
      </span>
      <button
        className={twMerge(
          "bg-background-tertiary w-8 h-8 rounded-lg grid place-content-center text-2xl disabled:cursor-not-allowed! not-disabled:hover:brightness-110 transition",
          `${current === total && "bg-background-tertiary/25"}`
        )}
        onClick={onNext}
        disabled={current === total}
      >
        <PiCaretRight />
      </button>
    </div>
  )
}
