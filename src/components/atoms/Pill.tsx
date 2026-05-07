import { MouseEventHandler } from 'react'

export type PillVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'outlined'
  | 'ghost'
  | 'warning'
  | 'info'
  | 'error'
  | 'pinky'

type Props = {
  variant: PillVariant
  label: string
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string
}

export function Pill({ label, onClick, variant, className = '' }: Props) {
  const baseClass =
    'jui-h-[1.25rem] jui-px-[0.6875rem] jui-rounded-full jui-inline-flex jui-items-center jui-justify-center jui-border jui-whitespace-nowrap'
  const clickable = onClick ? 'jui-cursor-pointer' : ''

  const variantClasses: Record<PillVariant, string> = {
    primary: 'jui-bg-primary-900 jui-border-primary-900 jui-text-white',
    success: 'jui-bg-success-200 jui-border-success-200 jui-text-primary-900',
    secondary: 'jui-bg-primary-200 jui-border-primary-200 jui-text-primary-900',
    outlined: 'jui-bg-transparent jui-border-primary-400 jui-text-primary-900',
    ghost: 'jui-bg-transparent jui-border-transparent jui-text-primary-900',
    warning: 'jui-bg-tertiary-200 jui-border-tertiary-200 jui-text-primary-900',
    info: 'jui-bg-sky-100 jui-border-sky-100 jui-text-primary-900',
    error: 'jui-bg-error-200 jui-border-error-200 jui-text-primary-900',
    pinky: 'jui-bg-pink-500 jui-border-pink-500 jui-text-white jui-p-10',
  }

  return (
    <div
      className={`${baseClass} ${variantClasses[variant]} ${clickable} ${className}`}
      onClick={onClick}
    >
      <p className="jui-font-rubik jui-text-xs jui-font-medium">{label}</p>
    </div>
  )
}
