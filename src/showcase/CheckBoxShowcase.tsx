import { useState } from 'react'
import { CheckBox } from '../components/atoms/CheckBox'

type Props = {
  disabled?: boolean
}

export function CheckBoxShowcase({ disabled }: Props) {
  const [checked, setChecked] = useState(false)

  return (
    <div className="jui-w-full jui-flex jui-flex-col">
      <div className="jui-w-full jui-flex jui-flex-col jui-items-start jui-p-8 jui-bg-white jui-space-y-4">
        <CheckBox
          size="small"
          checked={checked}
          label="Small checkbox"
          onChange={setChecked}
          disabled={disabled}
        />

        <CheckBox
          size="medium"
          checked={checked}
          label="Medium checkbox"
          onChange={setChecked}
          disabled={disabled}
        />

        <CheckBox
          size="large"
          checked={checked}
          label="Large checkbox"
          onChange={setChecked}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
