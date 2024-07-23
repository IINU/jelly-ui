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
    small: 'jui-h-[1.125rem] jui-w-[1.875rem] jui-px-[0.1875rem]',
    medium: 'jui-h-6 jui-w-[2.625rem] jui-px-[0.1875rem]',
    large: 'jui-h-8 jui-w-14 jui-px-1',
  }

  const circleSizes: Record<Size, string> = {
    small: 'jui-h-3 jui-w-3',
    medium: 'jui-h-[1.125rem] jui-w-[1.125rem]',
    large: 'jui-h-6 jui-w-6',
  }

  const iconSizes: Record<Size, string> = {
    small: '0.5rem',
    medium: '0.875rem',
    large: '1.25rem',
  }

  const activeClass = checked ? 'jui-bg-success-400' : 'jui-bg-primary-200'
  const base = 'jui-rounded-full jui-transition-colors jui-duration-300 jui-ease-in-out jui-shadow-inner'
  const circleBase = 'jui-rounded-full jui-bg-white jui-block jui-text-success-400 jui-flex jui-items-center jui-justify-center jui-transition-transform jui-duration-300 jui-ease-in-out jui-shadow'

  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`${buttonSizes[size]} ${activeClass} ${base}`}
    >
      <span className={`${circleSizes[size]} ${circleBase} ${checked ? 'jui-translate-x-full' : ''}`}>
        <IconCheck
          size={iconSizes[size]}
          stroke="0.25rem"
          className={`jui-transition-opacity jui-duration-300 jui-ease-in-out ${checked ? 'jui-opacity-100' : 'jui-opacity-0'}`}
        />
      </span>
    </button>
  )
}
