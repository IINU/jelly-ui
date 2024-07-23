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
      className={`jui-p-3 jui-flex jui-space-x-3 jui-w-full jui-bg-secondary-200 jui-items-center ${onClick ? 'jui-cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <Icon className="jui-text-primary-900"/>

      <Typography style="body1" className="jui-flex-1">{text}</Typography>

      {!!onClick && (
        <IconChevronRight className="jui-text-primary-900"/>
      )}
    </div>
  )
}
