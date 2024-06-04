import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'
import { Accent, accentToText } from '../../utils/accent'

type Props = {
  accent?: Accent,
  title: string
  data: string
  dataCaption?: string
  bottomContent?: ReactNode
}

export function DashboardNumberCard({ accent, title, data, dataCaption, bottomContent }: Props) {
  return (
    <div className="bg-white space-y-2 py-8 w-full rounded-lg shadow-low text-center">
      <Typography style="subtitle1">{title}</Typography>

      <div className="w-full">
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
