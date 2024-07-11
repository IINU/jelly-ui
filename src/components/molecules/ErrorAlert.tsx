import { ComponentType, ReactNode } from 'react'
import { IconAlertTriangle, IconChevronRight } from '@tabler/icons-react'
import { Typography } from '../atoms/Typography'

type Props = {
  text: ReactNode
  onClick?: () => void
  icon?: ComponentType<{ className?: string }>
}

export function ErrorAlert({ text, onClick, icon: Icon = IconAlertTriangle }: Props) {
  return (
    <div
      className={`p-3 flex space-x-3 w-full bg-error-300 items-center ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <Icon className="text-primary-900"/>

      <Typography style="body1" className="flex-1">{text}</Typography>

      {!!onClick && (
        <IconChevronRight className="text-primary-900"/>
      )}
    </div>
  )
}
