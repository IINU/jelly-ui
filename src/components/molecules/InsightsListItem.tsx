import { Typography } from '../atoms/Typography'
import { ComponentType } from 'react'
import { Accent, accentToText } from '../../utils/accent'
import { IconChevronRight } from '@tabler/icons-react'

type Props = {
  title: string
  subtitle: string
  data: string
  onClick?: () => void
  icon?: ComponentType<{ className?: string }>
  accent?: Accent
  className?: string
}

export function InsightsListItem({
  title,
  subtitle,
  data,
  onClick,
  icon: Icon,
  accent,
  className = '',
}: Props) {
  const borders = 'border-b border-primary-100 last:border-none'
  const cursor = onClick ? 'cursor-pointer' : 'cursor-default'
  const padding = onClick ? 'py-4 pl-3 pr-2' : 'py-4 px-3'

  className = `${borders} ${padding} ${cursor} ${className}`

  return (
    <div
      className={`bg-white flex justify-between items-center space-x-4 ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-start justify-center min-w-0">
        <Typography
          style="subtitle1"
          className="text-primary-800  text-ellipsis overflow-hidden whitespace-nowrap w-full"
        >
          {title}
        </Typography>

        <Typography
          style="body2"
          className="text-primary-600 text-ellipsis overflow-hidden whitespace-nowrap w-full"
        >
          {subtitle}
        </Typography>
      </div>

      <div className="flex items-center space-x-1 flex-shrink-0">
        <div className="flex flex-col items-center justify-center">
          {Icon && <Icon className={accentToText(accent)} />}

          <Typography style="h6" className={accentToText(accent)}>
            {data}
          </Typography>
        </div>

        {!!onClick && <IconChevronRight className="text-primary-400" />}
      </div>
    </div>
  )
}
