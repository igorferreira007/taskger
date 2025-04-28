import { Outlet } from "react-router"
import { Header } from "../Header"

export function AppLayout() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl w-full mx-auto px-4 py-6 lg:py-8">
        <Outlet />
      </main>
    </div>
  )
}
