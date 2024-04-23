import { ToggleButton } from '../components/atoms/ToggleButton'
import { useState } from 'react'

export function ToggleButtonShowcase() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex">
      <div className="flex flex-col px-16 py-8 bg-black space-y-2">
        <ToggleButton
          size="small"
          value={checked}
          onChange={setChecked}
        />

        <ToggleButton
          size="medium"
          value={checked}
          onChange={setChecked}
        />

        <ToggleButton
          size="large"
          value={checked}
          onChange={setChecked}
        />
      </div>

      <div className="flex flex-col px-16 py-8 bg-white space-y-2">
        <ToggleButton
          size="small"
          value={checked}
          onChange={setChecked}
        />

        <ToggleButton
          size="medium"
          value={checked}
          onChange={setChecked}
        />

        <ToggleButton
          size="large"
          value={checked}
          onChange={setChecked}
        />
      </div>
    </div>
  )
}
