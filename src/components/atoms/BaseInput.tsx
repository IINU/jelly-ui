import { ComponentType, FocusEventHandler, HTMLAttributes, HTMLInputAutoCompleteAttribute } from 'react'
import { IconLoader2 } from '@tabler/icons-react'
import { Typography } from './Typography'

export type InputProps = {
  name?: string
  placeholder?: string
  disabled?: boolean
  autoComplete?: HTMLInputAutoCompleteAttribute
  value: string
  onChange: (s: string) => void
  onBlur?: FocusEventHandler<HTMLInputElement>
  error?: string
  loading?: boolean
  icon?: ComponentType<{ className?: string }>
  leftIcon?: ComponentType<{ className?: string }>
  className?: string
  type: 'text' | 'password' | 'number'
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'],
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
  inputMode,
  value,
  onChange,
  onBlur,
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

  const padding = LeftIcon ? 'jui-py-2 jui-pr-3 jui-pl-10' : 'jui-py-2 jui-px-3'
  const baseClass = `jui-w-full placeholder:jui-text-primary-600 jui-text-base jui-font-lato ${padding} jui-rounded-lg focus:jui-outline-0 focus-visible:jui-outline-0`

  const borderClass = error
    ? 'jui-border-2 jui-border-error-400'
    : 'jui-border-2 jui-border-primary-100'

  const disabledClass = disabled ? 'jui-bg-primary-100' : 'jui-bg-white'

  return (
    <div className="jui-w-full jui-space-y-1">
      <div className="jui-relative jui-w-full">
        {LeftIcon && (
          <div className="jui-absolute jui-inset-y-0 jui-left-0 jui-pl-3 jui-flex jui-items-center">
            <LeftIcon className="jui-w-6 jui-h-6 jui-text-primary-900"/>
          </div>
        )}

        <input
          name={name}
          type={type}
          inputMode={inputMode}
          disabled={disabled}
          className={`${baseClass} ${borderClass} ${disabledClass} ${className}`}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={onBlur}
          min={min}
          max={max}
          step={step}
        />

        {Icon && (
          <div className="jui-absolute jui-inset-y-0 jui-right-0 jui-pr-3 jui-flex jui-items-center">
            <Icon className={`jui-w-6 jui-h-6 jui-text-primary-900 ${loading ? 'jui-animate-spin' : ''}`}/>
          </div>
        )}
      </div>

      {error && (
        <div className="jui-text-left jui-px-2">
          <Typography style="caption" className="jui-text-error-400">{error}</Typography>
        </div>
      )}
    </div>
  )
}
