import { ToggleButton } from '../components/atoms/ToggleButton'
import { useState } from 'react'

type Props = {
  disabled?: boolean
}

export function ToggleButtonShowcase({disabled}: Props) {
  const [checked, setChecked] = useState(false)

  return (
    <div className="jui-flex">
      <div className="jui-w-full jui-flex jui-flex-col jui-items-center jui-py-12 jui-bg-black jui-space-y-4">
        <ToggleButton
          size="small"
          value={checked}
          onChange={setChecked}
          disabled={disabled}
        />

        <ToggleButton
          size="medium"
          value={checked}
          onChange={setChecked}
          disabled={disabled}
        />

        <ToggleButton
          size="large"
          value={checked}
          onChange={setChecked}
          disabled={disabled}
        />
      </div>

      <div className="jui-w-full jui-flex jui-flex-col jui-items-center jui-py-12 jui-bg-white jui-space-y-4">
        <ToggleButton
          size="small"
          value={checked}
          onChange={setChecked}
          disabled={disabled}
        />

        <ToggleButton
          size="medium"
          value={checked}
          onChange={setChecked}
          disabled={disabled}
        />

        <ToggleButton
          size="large"
          value={checked}
          onChange={setChecked}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
