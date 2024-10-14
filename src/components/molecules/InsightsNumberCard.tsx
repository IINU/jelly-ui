import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'
import { Accent, accentToText } from '../../utils/accent'

type Props = {
  accent?: Accent,
  title: string
  data: string
  dataCaption?: string
  bottomContent?: ReactNode
  onClick?: () => void
}

export function InsightsNumberCard({ accent, title, data, dataCaption, bottomContent, onClick }: Props) {
  const base = 'jui-bg-white jui-space-y-2 jui-py-8 jui-w-full jui-text-center sm:jui-border-r sm:jui-border-b-0 jui-border-b jui-border-primary-100 last:jui-border-none'
  const pointer = onClick ? 'cursor-pointer' : ''

  return (
    <div className={`${base} ${pointer}`} onClick={onClick}>
      <Typography style="subtitle1">{title}</Typography>

      <div className="jui-w-full">
        <Typography style="h4" className={accentToText(accent)}>
          {data}
        </Typography>

        {dataCaption && (
          <Typography style="caption" className={accentToText(accent)}>
            {dataCaption}
          </Typography>
        )}
      </div>

      {bottomContent}
    </div>
  )
}
