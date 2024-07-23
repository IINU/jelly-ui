import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title: string
  children: ReactNode
}

export function InsightsListGroup({ title, children }: Props) {
  return (
    <div>
      <div className="jui-px-3 jui-py-2 jui-bg-primary-100">
        <Typography style="subtitle2" className="jui-text-primary-800">
          {title}
        </Typography>
      </div>

      {children}
    </div>
  )
}
