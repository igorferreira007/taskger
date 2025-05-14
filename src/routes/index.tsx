import { BrowserRouter } from "react-router"
import { AdminRoutes } from "./AdminRoutes"
import { AuthRoutes } from "./AuthRoutes"
import { useAuth } from "@/hooks/useAuth"
import { MemberRoutes } from "./MemberRoutes"
import { Loading } from "@/components/Loading"

export function Routes() {
  const { session, isLoading } = useAuth()

  function Route() {
    switch (session?.user.role) {
      case "member":
        return <MemberRoutes />

      case "admin":
        return <AdminRoutes />

      default:
        return <AuthRoutes />
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}
