import { ButtonText } from "@/components/ButtonText"
import { Input } from "@/components/Input"

import { PiUser } from "react-icons/pi"
import { PiEnvelope } from "react-icons/pi"
import { PiPassword } from "react-icons/pi"
import { Button } from "@/components/Button"
import { useAuth } from "@/hooks/useAuth"
import { FormEvent, useMemo, useState } from "react"
import { api } from "@/services/api"
import { FaUser } from "react-icons/fa"

export function UserProfile() {
  const { session, updateProfile } = useAuth()

  const initialName = session?.user.name
  const initialEmail = session?.user.email

  const [name, setName] = useState(session!.user.name)
  const [email, setEmail] = useState(session!.user.email)
  const [newPassword, setNewPassword] = useState("")
  const [oldPassword, setOldPassword] = useState("")

  const avatarUrl = session?.user.avatar
    ? `${api.defaults.baseURL}/uploads/${session.user.avatar}`
    : ""
  const [avatar, setAvatar] = useState(avatarUrl)

  const formChanged = useMemo(() => {
    return (
      name !== initialName ||
      email !== initialEmail ||
      newPassword !== "" ||
      oldPassword !== ""
    )
  }, [name, email, newPassword, oldPassword, initialName, initialEmail])

  async function handleUpdate(e: FormEvent) {
    e.preventDefault()

    const user = {
      name,
      email,
      ...(newPassword && { password: newPassword }),
      ...(oldPassword && { old_password: oldPassword }),
    }

    await updateProfile(user)
  }

  return (
    <div className="pb-16">
      <header className="bg-brand/20">
        <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-15">
          <ButtonText />
        </div>
      </header>
      <main className="w-full max-w-7xl mx-auto px-4">
        {avatar ? (
          <img
            src={avatar}
            className="w-16 h-16 lg:w-40 lg:h-40 object-cover rounded-full border border-background-tertiary mx-auto -mt-8 lg:-mt-20"
          />
        ) : (
          <FaUser className="w-16 h-16 lg:w-40 lg:h-40 object-cover rounded-full border border-background-tertiary mx-auto -mt-8 lg:-mt-20 bg-black text-text-primary" />
        )}
        <form
          className="max-w-96 mx-auto space-y-2 mt-8 lg:mt-16"
          onSubmit={handleUpdate}
        >
          <Input
            icon={PiUser}
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            icon={PiEnvelope}
            placeholder="Seu nome"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <Input
            icon={PiPassword}
            placeholder="Senha atual"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            className="mt-8"
            minLength={6}
            label="Alterar senha"
          />
          <Input
            icon={PiPassword}
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            minLength={6}
          />
          <Button className="mt-8" type="submit" disabled={!formChanged}>
            Salvar
          </Button>
        </form>
      </main>
    </div>
  )
}
