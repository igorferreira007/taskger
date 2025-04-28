import { PiCaretLeft, PiCaretRight } from "react-icons/pi"

export function Pagination() {
  return (
    <div className="flex items-center gap-2 w-40 mx-auto mt-4">
      <button className="bg-background-tertiary w-8 h-8 rounded-lg grid place-content-center text-2xl">
        <PiCaretLeft />
      </button>
      <span className="text-sm grow text-center">1 / 3</span>
      <button className="bg-background-tertiary w-8 h-8 rounded-lg grid place-content-center text-2xl">
        <PiCaretRight />
      </button>
    </div>
  )
}
