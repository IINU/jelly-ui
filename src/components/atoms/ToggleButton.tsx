import { useEffect, useState } from 'react'
import { IconCheck } from '@tabler/icons-react'

type Size = 'small' | 'medium' | 'large'

type Props = {
  value: boolean
  onChange: (v: boolean) => void
  size?: Size
}

export function ToggleButton({ value, onChange, size = 'small' }: Props) {
  const [checked, setChecked] = useState(value)

  useEffect(() => {
    setChecked(value)
  }, [value])

  const buttonSizes: Record<Size, string> = {
    small: 'h-[1.125rem] w-[1.875rem] px-[0.1875rem]',
    medium: 'h-6 w-[2.625rem] px-[0.1875rem]',
    large: 'h-8 w-14 px-1',
  }

  const circleSizes: Record<Size, string> = {
    small: 'h-3 w-3',
    medium: 'h-[1.125rem] w-[1.125rem]',
    large: 'h-6 w-6',
  }

  const iconSizes: Record<Size, string> = {
    small: '0.5rem',
    medium: '0.875rem',
    large: '1.25rem',
  }

  const activeClass = checked ? 'bg-success-400' : 'bg-primary-200'
  const base = 'rounded-full  transition-colors duration-300 ease-in-out shadow-inner'
  const circleBase = 'rounded-full bg-white block text-success-400 flex items-center justify-center transition-transform duration-300 ease-in-out shadow'

  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`${buttonSizes[size]} ${activeClass} ${base}`}
    >
      <span className={`${circleSizes[size]} ${circleBase} ${checked ? 'translate-x-full' : ''}`}>
        <IconCheck
          size={iconSizes[size]}
          stroke="0.25rem"
          className={`transition-opacity duration-300 ease-in-out ${checked ? 'opacity-100' : 'opacity-0'}`}
        />
      </span>
    </button>
  )
}
