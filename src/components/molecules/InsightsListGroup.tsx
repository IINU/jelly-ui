import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title: string
  children: ReactNode
}

export function InsightsListGroup({ title, children }: Props) {
  return (
    <div>
      <div className="px-3 py-2 bg-primary-100">
        <Typography style="subtitle2" className="text-primary-800">
          {title}
        </Typography>
      </div>

      {children}
    </div>
  )
}
