import { Typography } from './Typography'

type Variant = 'primary'

type Props = {
  variant: Variant
  label: string
  className?: string
}

export function Pill({ label, variant, className = '' }: Props) {
  const baseClass = 'h-7 px-4 rounded-full inline-flex items-center justify-center'

  const variantClasses: Record<Variant, string> = {
    primary: 'bg-primary-900 text-white'
  }

  return (
    <div className={`${baseClass} ${variantClasses[variant]} ${className}`}>
      <Typography style="button">{label}</Typography>
    </div>
  )
}
