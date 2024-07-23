import { ComponentType, HTMLInputAutoCompleteAttribute } from 'react'
import { IconLoader2 } from '@tabler/icons-react'
import { Typography } from './Typography'

type Props = {
  name?: string
  placeholder?: string
  disabled?: boolean
  autoComplete?: HTMLInputAutoCompleteAttribute
  value: string
  onChange: (s: string) => void
  error?: string
  loading?: boolean
  icon?: ComponentType<{ className?: string }>
  className?: string
}

export function TextareaInput({
  name,
  placeholder,
  disabled,
  autoComplete,
  value,
  onChange,
  error,
  icon: Icon,
  loading = false,
  className = '',
}: Props) {
  if (loading) {
    Icon = IconLoader2
  }

  const baseClass = 'jui-w-full placeholder:jui-text-primary-600 jui-text-base jui-font-lato jui-px-3 jui-py-2 jui-rounded-lg focus:jui-outline-0 focus-visible:jui-outline-0'

  const borderClass = error
    ? 'jui-border-2 jui-border-error-400'
    : 'jui-border-2 jui-border-primary-100'

  const disabledClass = disabled ? 'jui-bg-primary-100' : 'jui-bg-white'

  return (
    <div className="jui-w-full jui-space-y-1">
      <div className="jui-relative jui-w-full jui-flex">
        <textarea
          name={name}
          disabled={disabled}
          className={`${baseClass} ${borderClass} ${disabledClass} ${className}`}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />

        {Icon && (
          <div className="jui-absolute jui-inset-y-0 jui-right-0 jui-flex jui-items-start jui-p-3">
            <Icon className={`jui-w-6 jui-h-6 jui-text-primary-900 ${loading ? 'jui-animate-spin' : ''}`}/>
          </div>
        )}
      </div>

      {error && (
        <div className="jui-text-left jui-px-2">
          <Typography style="caption" className="jui-text-error-400">
            {error}
          </Typography>
        </div>
      )}
    </div>
  )
}
