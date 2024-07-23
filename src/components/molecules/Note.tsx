import { Typography } from '../atoms/Typography'

export type NoteVariant = 'default' | 'system' | 'error'

type Props = {
  title: string
  body: string
  variant?: NoteVariant
}

export function Note({ title, body, variant = 'default' }: Props) {
  const variantClass: Record<NoteVariant, string> = {
    default: 'jui-bg-primary-100 jui-border-primary-100',
    system: 'jui-bg-transparent jui-border-transparent',
    error: 'jui-bg-error-200 jui-border-error-400',
  }

  return (
    <div className="jui-space-y-2">
      <Typography style="caption" className="jui-text-primary-800">
        {title}
      </Typography>

      <div className={`${variantClass[variant]} jui-border-2 jui-rounded-lg jui-px-3.5 jui-py-1.5`}>
        <Typography style="body1" className="jui-text-primary-900">
          {body}
        </Typography>
      </div>
    </div>
  )
}
