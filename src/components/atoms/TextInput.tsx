import { ComponentType, HTMLInputAutoCompleteAttribute } from 'react'
import { IconLoader2 } from '@tabler/icons-react'
import { Typography } from './Typography'

type Props = {
  name?: string
  placeholder?: string
  autoComplete?: HTMLInputAutoCompleteAttribute
  value: string
  onChange: (s: string) => void
  error?: string
  loading?: boolean
  icon?: ComponentType<{ className?: string }>
  className?: string
}

export function TextInput({
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
  error,
  icon: Icon,
  loading = false,
  className,
}: Props) {
  if (loading) {
    Icon = IconLoader2
  }

  const baseClass = 'w-full bg-white placeholder:text-primary-600 font-lato px-3 py-2 rounded-lg focus:outline-0 focus-visible:outline-0'

  const borderClass = error
    ? 'border-2 border-error-400'
    : 'border-2 border-primary-100'

  return (
    <div className="w-full space-y-1">
      <div className="relative w-full">
        <input
          name={name}
          type="text"
          className={`${baseClass} ${borderClass} ${className}`}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
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
