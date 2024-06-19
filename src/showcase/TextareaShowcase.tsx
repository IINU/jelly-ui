import { useState } from 'react'
import { TextareaInput } from '../components/atoms/TextareaInput'
import { IconChefHat } from '@tabler/icons-react'

type Props = {
  placeholder: string
  error: string
}

export function TextareaShowcase({ placeholder, error }: Props) {
  const [text, setText] = useState<string>('')

  return (
    <div className="flex">
      <div className="px-16 py-8 bg-white space-y-2 w-[24rem]">
        <TextareaInput
          placeholder={placeholder}
          value={text}
          onChange={setText}
          error={error}
        />

        <TextareaInput
          placeholder={placeholder}
          value={text}
          onChange={setText}
          icon={IconChefHat}
          error={error}
        />

        <TextareaInput
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
