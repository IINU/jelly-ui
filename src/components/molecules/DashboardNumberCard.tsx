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

export function DashboardNumberCard({ accent, title, data, dataCaption, bottomContent, onClick }: Props) {
  const base = 'jui-bg-white jui-space-y-2 jui-py-8 jui-w-full jui-rounded-lg jui-shadow-low jui-text-center'
  const pointer = onClick ? 'cursor-pointer' : ''

  return (
    <div className={`${base} ${pointer}`} onClick={onClick}>
      <Typography style="subtitle1" className="jui-text-primary-900">
        {title}
      </Typography>

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
