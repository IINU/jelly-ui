import { MouseEventHandler } from 'react'

export type PillVariant = 'primary' | 'secondary' | 'success' | 'outlined'

type Props = {
  variant: PillVariant
  label: string
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string
}

export function Pill({ label, onClick, variant, className = '' }: Props) {
  const baseClass = 'h-[1.25rem] px-[0.6875rem] rounded-full inline-flex items-center justify-center border'
  const clickable = onClick ? 'cursor-pointer' : ''

  const variantClasses: Record<PillVariant, string> = {
    primary: 'bg-primary-900 border-primary-900 text-white',
    success: 'bg-success-200 border-success-200 text-primary-900',
    secondary: 'bg-primary-200 border-primary-200 text-primary-900',
    outlined: 'bg-transparent border-primary-400 text-primary-900'
  }

  return (
    <div
      className={`${baseClass} ${variantClasses[variant]} ${clickable} ${className}`}
      onClick={onClick}
    >
      <p className="font-rubik text-xs font-medium">{label}</p>
    </div>
  )
}
