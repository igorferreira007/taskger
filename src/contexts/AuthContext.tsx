/* eslint-disable react-refresh/only-export-components */
import { api } from "@/services/api"
import { AxiosError } from "axios"
import { createContext, ReactNode, useEffect, useState } from "react"
import { ZodError } from "zod"

type AuthContext = {
  isLoading: boolean
  session: null | UserAPIResponse
  save: (data: UserAPIResponse) => void
  remove: () => void
  updateProfile: (user: UserUpdate) => void
}

type UserUpdate = {
  name: string
  email: string
  password?: string
  old_password?: string
}

const LOCAL_STORAGE_KEY = "@taskger"

export const AuthContext = createContext({} as AuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null)
  const [isLoading, setIsLoading] = useState(true)

  function save(data: UserAPIResponse) {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token)

    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`

    setSession(data)
  }

  function remove() {
    setSession(null)

    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`)
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`)

    window.location.assign("/")
  }

  async function updateProfile(user: UserUpdate) {
    try {
      await api.put(`/users/${session?.user.id}`, user)

      localStorage.setItem(
        "@taskger:user",
        JSON.stringify({
          name: user.name,
          email: user.email,
        })
      )

      setSession((prevState) => {
        return {
          user: {
            ...prevState!.user,
            name: user.name,
            email: user.email,
          },
          token: prevState!.token,
        }
      })

      alert("Perfil atualizado com sucesso!")
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      alert("Não foi possível atualizar!")
    }
  }

  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`)
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`)

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setSession({
        token,
        user: JSON.parse(user),
      })
    }

    setIsLoading(false)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{ session, save, isLoading, remove, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}
