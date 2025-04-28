import { SignIn } from "@/pages/SignIn"
import { SignUp } from "@/pages/SignUp"
import { Route, Routes } from "react-router"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}
