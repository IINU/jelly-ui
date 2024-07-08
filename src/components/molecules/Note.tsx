import { Typography } from '../atoms/Typography'

export type NoteVariant = 'default' | 'system' | 'error'

type Props = {
  title: string
  body: string
  variant?: NoteVariant
}

export function Note({ title, body, variant = 'default' }: Props) {
  const variantClass: Record<NoteVariant, string> = {
    default: 'bg-primary-100 border-primary-100',
    system: 'bg-transparent border-transparent',
    error: 'bg-error-200 border-error-400',
  }

  return (
    <div className="space-y-2">
      <Typography style="caption" className="text-primary-800">
        {title}
      </Typography>

      <div className={`${variantClass[variant]} border-2 rounded-lg px-3.5 py-1.5`}>
        <Typography style="body1" className="text-primary-900">
          {body}
        </Typography>
      </div>
    </div>
  )
}
