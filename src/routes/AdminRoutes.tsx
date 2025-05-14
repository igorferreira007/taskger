import { AppLayout } from "@/components/layouts/AppLayout"
import { EditTask } from "@/pages/EditTask"
import { Members } from "@/pages/Members"
import { NewTask } from "@/pages/NewTask"
import { NewTeam } from "@/pages/NewTeam"
import { TaskDetails } from "@/pages/TaskDetails"
import { Tasks } from "@/pages/Tasks"
import { Teams } from "@/pages/Teams"
import { TaskHistory } from "@/pages/TaskHistory"
import { Route, Routes } from "react-router"
import { UserProfile } from "@/pages/UserProfile"
import { NotFound } from "@/pages/NotFound"

export function AdminRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Tasks />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="/task-details/:id" element={<TaskDetails />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/new-team" element={<NewTeam />} />
          <Route path="/members" element={<Members />} />
          <Route path="/task-history" element={<TaskHistory />} />
        </Route>
        <Route path="/profile" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
