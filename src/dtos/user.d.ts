type UserAPIRole = "member" | "admin"

type UserAPIResponse = {
  token: string
  user: {
    id: string
    name: string
    email: string
    avatar?: string
    role: UserAPIRole
  }
}
