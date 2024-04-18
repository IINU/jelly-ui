import { useState } from 'react'
import { PasswordInput } from '../components/atoms/PasswordInput'
import { IconLock } from '@tabler/icons-react'

type Props = {
  placeholder: string
  error: string
}

export function PasswordShowcase({ placeholder, error }: Props) {
  const [text, setText] = useState<string>('')

  return (
    <div className="flex">
      <div className="px-16 py-8 bg-white space-y-2 w-[24rem]">
        <PasswordInput
          placeholder={placeholder}
          value={text}
          onChange={setText}
          error={error}
        />

        <PasswordInput
          placeholder={placeholder}
          value={text}
          onChange={setText}
          icon={IconLock}
          error={error}
        />

        <PasswordInput
          placeholder={placeholder}
          value={text}
          onChange={setText}
          loading={true}
          error={error}
        />
      </div>
    </div>
  )
}
