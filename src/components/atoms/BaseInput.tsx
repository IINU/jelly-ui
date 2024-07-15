import { ComponentType, HTMLInputAutoCompleteAttribute } from 'react'
import { IconLoader2 } from '@tabler/icons-react'
import { Typography } from './Typography'

export type InputProps = {
  name?: string
  placeholder?: string
  disabled?: boolean
  autoComplete?: HTMLInputAutoCompleteAttribute
  value: string
  onChange: (s: string) => void
  error?: string
  loading?: boolean
  icon?: ComponentType<{ className?: string }>
  leftIcon?: ComponentType<{ className?: string }>
  className?: string
  type: 'text' | 'password' | 'number'
  min?: number
  max?: number
  step?: number
}

export function BaseInput({
  name,
  placeholder,
  disabled,
  autoComplete,
  type,
  value,
  onChange,
  error,
  icon: Icon,
  leftIcon: LeftIcon,
  loading = false,
  className = '',
  min,
  max,
  step,
}: InputProps) {
  if (loading) {
    Icon = IconLoader2
  }

  const padding = LeftIcon ? 'py-2 pr-3 pl-10' : 'py-2 px-3'
  const baseClass = `w-full placeholder:text-primary-600 text-base font-lato ${padding} rounded-lg focus:outline-0 focus-visible:outline-0`

  const borderClass = error
    ? 'border-2 border-error-400'
    : 'border-2 border-primary-100'

  const disabledClass = disabled ? 'bg-primary-100' : 'bg-white'

  return (
    <div className="w-full space-y-1">
      <div className="relative w-full">
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <LeftIcon className="w-6 h-6 text-primary-900"/>
          </div>
        )}

        <input
          name={name}
          type={type}
          disabled={disabled}
          className={`${baseClass} ${borderClass} ${disabledClass} ${className}`}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          min={min}
          max={max}
          step={step}
        />

        {Icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <Icon className={`w-6 h-6 text-primary-900 ${loading ? 'animate-spin' : ''}`}/>
          </div>
        )}
      </div>

      {error && (
        <div className="text-left px-2">
          <Typography style="caption" className="text-error-400">{error}</Typography>
        </div>
      )}
    </div>
  )
}
