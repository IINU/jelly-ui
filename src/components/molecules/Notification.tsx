import { ComponentType, ReactNode } from 'react'
import {
  IconAlertTriangle,
  IconChevronRight,
  IconHelp,
} from '@tabler/icons-react'
import { Typography } from '../atoms/Typography'

export type NotificationVariant = 'information' | 'warning'

type Props = {
  variant: NotificationVariant
  text: ReactNode
  onClick?: () => void
}

export function Notification({ variant, text, onClick }: Props) {
  const baseClass =
    'jui-p-3 jui-flex jui-w-full jui-items-center jui-space-x-3 jui-rounded jui-border'
  const clickable = onClick ? 'jui-cursor-pointer' : ''

  const variantClasses: Record<NotificationVariant, string> = {
    information: 'jui-bg-secondary-200 jui-border-secondary-300',
    warning: 'jui-bg-error-200 jui-border-error-400',
  }

  const variantIcons: Record<
    NotificationVariant,
    ComponentType<{ className?: string }>
  > = {
    information: IconHelp,
    warning: IconAlertTriangle,
  }

  const Icon = variantIcons[variant]

  return (
    <div
      className={`${baseClass} ${variantClasses[variant]} ${clickable}`}
      onClick={onClick}
    >
      <Icon className="jui-text-primary-900 jui-shrink-0" />

      <Typography
        style="body1"
        className="jui-flex-1 jui-leading-5 jui-text-primary-900"
      >
        {text}
      </Typography>

      {!!onClick && (
        <IconChevronRight className="jui-text-primary-900 jui-shrink-0" />
      )}
    </div>
  )
}
