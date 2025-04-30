import { useState } from "react"
import { PiCaretLeft, PiCaretRight } from "react-icons/pi"
import { twMerge } from "tailwind-merge"

export function Pagination() {
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(3)

  function handlePagination(action: "next" | "previous") {
    setPage((prevState) => {
      if (action === "next" && prevState < totalPage) {
        return prevState + 1
      }

      if (action === "previous" && prevState > 1) {
        return prevState - 1
      }

      return prevState
    })
  }

  return (
    <div className="flex items-center gap-2 w-40 mx-auto mt-4">
      <button
        className={twMerge(
          "bg-background-tertiary w-8 h-8 rounded-lg grid place-content-center text-2xl disabled:cursor-not-allowed!",
          `${page === 1 && "bg-background-tertiary/25"}`
        )}
        onClick={() => handlePagination("previous")}
        disabled={page === 1}
      >
        <PiCaretLeft />
      </button>
      <span className="text-sm grow text-center">
        {page} / {totalPage}
      </span>
      <button
        className={twMerge(
          "bg-background-tertiary w-8 h-8 rounded-lg grid place-content-center text-2xl disabled:cursor-not-allowed!",
          `${page === totalPage && "bg-background-tertiary/25"}`
        )}
        onClick={() => handlePagination("next")}
        disabled={page === totalPage}
      >
        <PiCaretRight />
      </button>
    </div>
  )
}
