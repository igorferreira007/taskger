import { AppLayout } from "@/components/layouts/AppLayout"
import { EditTask } from "@/pages/EditTask"
import { Members } from "@/pages/Members"
import { NewTask } from "@/pages/NewTask"
import { NewTeam } from "@/pages/NewTeam"
import { TaskDetails } from "@/pages/TaskDetails"
import { Tasks } from "@/pages/Tasks"
import { Teams } from "@/pages/Teams"
import { Route, Routes } from "react-router"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Tasks />} />
        <Route path="/new-task" element={<NewTask />} />
        <Route path="/task-details" element={<TaskDetails />} />
        <Route path="/edit-task" element={<EditTask />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/new-team" element={<NewTeam />} />
        <Route path="/members" element={<Members />} />
      </Route>
    </Routes>
  )
}
