import { Outlet } from "react-router"
import { Header } from "../Header"

export function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
