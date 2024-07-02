import { Typography } from './Typography'

export type PillVariant = 'primary' | 'secondary' | 'success'

type Props = {
  variant: PillVariant
  label: string
  className?: string
}

export function Pill({ label, variant, className = '' }: Props) {
  const baseClass = 'h-6 px-3 rounded-full inline-flex items-center justify-center'

  const variantClasses: Record<PillVariant, string> = {
    primary: 'bg-primary-900 text-white',
    success: 'bg-success-200 text-primary-900',
    secondary: 'bg-primary-200 text-primary-900',
  }

  return (
    <div className={`${baseClass} ${variantClasses[variant]} ${className}`}>
      <Typography style="button">{label}</Typography>
    </div>
  )
}
