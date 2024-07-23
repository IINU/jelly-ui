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
    <div className="jui-flex">
      <div className="jui-px-16 jui-py-8 jui-bg-white jui-space-y-2 jui-w-[24rem]">
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
