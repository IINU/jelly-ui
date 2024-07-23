import { useState } from 'react'
import { TextInput } from '../components/atoms/TextInput'
import { IconChefHat } from '@tabler/icons-react'

type Props = {
  placeholder: string
  error: string
}

export function TextShowcase({ placeholder, error }: Props) {
  const [text, setText] = useState<string>('')

  return (
    <div className="jui-flex">
      <div className="jui-px-16 jui-py-8 jui-bg-white jui-space-y-2 jui-w-[24rem]">
        <TextInput
          placeholder={placeholder}
          value={text}
          onChange={setText}
          error={error}
        />

        <TextInput
          placeholder={placeholder}
          value={text}
          onChange={setText}
          icon={IconChefHat}
          error={error}
        />

        <TextInput
          placeholder={placeholder}
          value={text}
          onChange={setText}
          leftIcon={IconChefHat}
          error={error}
        />

        <TextInput
          placeholder={placeholder}
          value={text}
          onChange={setText}
          loading={true}
          error={error}
        />

        <TextInput
          disabled
          placeholder={placeholder}
          value={text}
          onChange={setText}
          error={error}
        />

        <TextInput
          disabled
          placeholder={placeholder}
          value={text}
          onChange={setText}
          icon={IconChefHat}
          error={error}
        />

        <TextInput
          disabled
          placeholder={placeholder}
          value={text}
          onChange={setText}
          leftIcon={IconChefHat}
          error={error}
        />

        <TextInput
          disabled
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
