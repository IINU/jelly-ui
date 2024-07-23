import { ComponentType, MouseEventHandler } from 'react'
import { IconLoader2 } from '@tabler/icons-react'

export type ButtonStyle = 'primary' | 'secondary' | 'delete' | 'ghost' | 'disabled' 

type IconOrLabel = {
  label: string,
  icon?: ComponentType
} | {
  label?: string
  icon: ComponentType
}

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
  style?: ButtonStyle
  className?: string
  disabled?: boolean
  loading?: boolean
} & IconOrLabel

function getPadding(label: boolean, icon: boolean) {
  if (!icon) {
    return 'jui-px-5'
  }

  return label ? 'jui-pl-5 jui-pr-4' : 'jui-p-0'
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
  const padding = getPadding(!!label, !!Icon || loading)
  const base = 'jui-font-rubik jui-font-medium jui-text-sm jui-rounded-full jui-flex jui-items-center jui-justify-center jui-space-x-1 jui-min-w-[2.5rem] jui-h-[2.5rem] jui-border-2'

  const styled: Record<ButtonStyle, string> = {
    primary: 'jui-bg-primary-900 jui-text-white jui-border-primary-900 hover:jui-bg-primary-800',
    secondary: 'jui-bg-white jui-text-primary-900 jui-border-primary-200 hover:jui-bg-primary-200',
    delete: 'jui-bg-white jui-text-error-400 jui-border-error-400 hover:jui-bg-error-200',
    ghost: 'jui-bg-white jui-text-primary-900 jui-border-white hover:jui-bg-primary-100 hover:jui-border-primary-100',
    disabled: 'jui-bg-gray-400 jui-text-white jui-border-gray-400 jui-cursor-not-allowed',
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
        ? <IconLoader2 className="jui-animate-spin"/>
        : Icon && <Icon/>}
    </button>
  )
}
