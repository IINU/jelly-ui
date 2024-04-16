import { ComponentType, MouseEventHandler } from 'react'
import { IconLoader2 } from '@tabler/icons-react'

type Style = 'primary' | 'secondary' | 'delete' | 'ghost' | 'disabled'

type IconOrLabel = {
  label: string,
  icon?: ComponentType
} | {
  label?: string
  icon: ComponentType,
}

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
  style?: Style
  className?: string,
  disabled?: boolean
  loading?: boolean
} & IconOrLabel

function getPadding(label: boolean, icon: boolean) {
  if (!icon) {
    return 'px-5'
  }

  return label ? 'pl-5 pr-4' : 'p-0'
}

export function Button({
  style = 'primary',
  label,
  disabled = false,
  loading = false,
  className,
  onClick,
  icon: Icon,
}: Props) {
  const padding = getPadding(!!label, !!Icon)
  const base = 'font-rubik font-medium text-sm rounded-full flex items-center justify-center space-x-1 min-w-10 h-10'

  const styled: Record<Style, string> = {
    primary: 'bg-primary-900 text-tertiary-400 border-2 border-primary-900 hover:bg-primary-800',
    secondary: 'bg-white text-primary-900 border-2 border-primary-900 hover:bg-primary-200',
    delete: 'bg-white text-error-400 border-2 border-error-400 hover:bg-error-200',
    ghost: 'bg-white text-primary-900 border-2 border-white hover:bg-primary-100 hover:border-primary-100',
    disabled: 'bg-gray-400 text-white border-2 border-gray-400 cursor-not-allowed',
  }

  if (loading) {
    Icon = IconLoader2
  }

  if (disabled) {
    style = 'disabled'
  }

  return (
    <button
      type="button"
      onClick={event => !disabled && onClick(event)}
      className={`${base} ${padding} ${styled[style]} ${className}`}
    >
      {label && <span>{label}</span>}

      {loading
        ? <IconLoader2 className="animate-spin"/>
        : Icon && <Icon/>}
    </button>
  )
}
