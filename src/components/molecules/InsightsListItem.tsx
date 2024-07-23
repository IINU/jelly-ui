import { Typography } from '../atoms/Typography'
import { ComponentType } from 'react'
import { Accent, accentToText } from '../../utils/accent'
import { IconChevronRight } from '@tabler/icons-react'

type Props = {
  readonly?: boolean
  title: string
  subtitle: string
  data: string
  onClick?: () => void
  icon?: ComponentType<{ className?: string }>
  accent?: Accent
  className?: string
}

export function InsightsListItem({
  readonly = false,
  title,
  subtitle,
  data,
  onClick,
  icon: Icon,
  accent,
  className = '',
}: Props) {
  if (readonly) {
    onClick = undefined
  }

  const borders = 'jui-border-b jui-border-primary-100 last:jui-border-none'
  const cursor = onClick ? 'jui-cursor-pointer' : 'jui-cursor-default'
  const padding = onClick ? 'jui-py-4 jui-pl-3 jui-pr-2' : 'jui-py-4 jui-px-3'

  className = `${borders} ${padding} ${cursor} ${className}`

  return (
    <div
      className={`jui-bg-white jui-flex jui-justify-between jui-items-center jui-space-x-4 ${className}`}
      onClick={onClick}
    >
      <div className="jui-flex jui-flex-col jui-items-start jui-justify-center jui-min-w-0">
        <Typography
          style="subtitle1"
          className="jui-text-primary-800 jui-text-ellipsis jui-overflow-hidden jui-whitespace-nowrap jui-w-full"
        >
          {title}
        </Typography>

        <Typography
          style="body2"
          className="jui-text-primary-600 jui-text-ellipsis jui-overflow-hidden jui-whitespace-nowrap jui-w-full"
        >
          {subtitle}
        </Typography>
      </div>

      <div className="jui-flex jui-items-center jui-space-x-1 jui-flex-shrink-0">
        <div className="jui-flex jui-flex-col jui-items-center jui-justify-center">
          {Icon && <Icon className={accentToText(accent)} />}

          <Typography style="h6" className={accentToText(accent)}>
            {data}
          </Typography>
        </div>

        {!!onClick && <IconChevronRight className="jui-text-primary-400" />}
      </div>
    </div>
  )
}
