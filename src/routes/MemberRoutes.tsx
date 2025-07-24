import { AppLayout } from "@/components/layouts/AppLayout"
import { TaskDetails } from "@/pages/TaskDetails"
import { Tasks } from "@/pages/Tasks"
import { TaskHistory } from "@/pages/TaskHistory"
import { Route, Routes } from "react-router"
import { UserProfile } from "@/pages/UserProfile"
import { NotFound } from "@/pages/NotFound"

export function MemberRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Tasks />} />
          <Route path="/task-details/:id" element={<TaskDetails />} />
          {/* <Route path="/edit-task/:id" element={<EditTask />} /> */}
          <Route path="/task-history" element={<TaskHistory />} />
        </Route>
        <Route path="/profile" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
