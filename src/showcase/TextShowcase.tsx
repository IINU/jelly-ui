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
    <div className="flex">
      <div className="px-16 py-8 bg-white space-y-2 w-[24rem]">
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
