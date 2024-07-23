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
    <div className="jui-flex">
      <div className="jui-px-16 jui-py-8 jui-bg-white jui-space-y-2 jui-w-[24rem]">
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
