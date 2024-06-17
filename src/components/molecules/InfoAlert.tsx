import { ComponentType, ReactNode } from 'react'
import { IconChevronRight, IconInfoSquareRounded } from '@tabler/icons-react'
import { Typography } from '../atoms/Typography'

type Props = {
  text: ReactNode
  onClick?: () => void
  icon?: ComponentType<{ className?: string }>
}

export function InfoAlert({ text, onClick, icon: Icon = IconInfoSquareRounded }: Props) {
  return (
    <div
      className={`p-3 flex space-x-3 w-full bg-secondary-200 items-center ${onClick ? 'cursor-pointer' : ''}`}
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
