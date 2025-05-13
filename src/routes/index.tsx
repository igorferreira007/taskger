import { BrowserRouter } from "react-router"
import { AppRoutes } from "./AppRoutes"
import { AuthRoutes } from "./AuthRoutes"

export function AllRoutes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
