import { AppLayout } from "@/components/layouts/AppLayout"
import { Tasks } from "@/pages/Tasks"
import { Teams } from "@/pages/Teams"
import { Route, Routes } from "react-router"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Tasks />} />
        <Route path="/teams" element={<Teams />} />
      </Route>
    </Routes>
  )
}
