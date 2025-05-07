import { ButtonText } from "@/components/ButtonText"
import { Input } from "@/components/Input"

import profilePicture from "@/assets/Igor.png"
import { PiUser } from "react-icons/pi"
import { PiEnvelope } from "react-icons/pi"
import { PiPassword } from "react-icons/pi"
import { Button } from "@/components/Button"

export function UserProfile() {
  return (
    <div className="pb-16">
      <header className="bg-brand/20">
        <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-15">
          <ButtonText />
        </div>
      </header>
      <main className="w-full max-w-7xl mx-auto px-4">
        <img
          src={profilePicture}
          className="w-16 h-16 lg:w-40 lg:h-40 object-cover rounded-full border border-background-tertiary mx-auto -mt-8 lg:-mt-20"
        />
        <form className="max-w-96 mx-auto space-y-2 mt-8 lg:mt-16">
          <Input
            icon={PiUser}
            placeholder="Seu nome"
            defaultValue="Igor Ferreira"
          />
          <Input
            icon={PiEnvelope}
            placeholder="Seu nome"
            defaultValue="igor@email.com"
            type="email"
          />
          <Input
            icon={PiPassword}
            placeholder="Seu nome"
            type="password"
            className="mt-8"
          />
          <Input icon={PiPassword} placeholder="Seu nome" type="password" />
          <Button className="mt-8">Salvar</Button>
        </form>
      </main>
    </div>
  )
}
