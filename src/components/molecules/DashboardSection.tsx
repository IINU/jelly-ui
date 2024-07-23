import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title: string
  children: ReactNode
}

export function DashboardSection({ title, children }: Props) {
  return (
    <>
      <div className="jui-p-4 jui-text-primary-800">
        <Typography style="subtitle2">{title}</Typography>
      </div>

      <div className="jui-px-4 jui-pb-2 jui-space-y-4">
        {children}
      </div>
    </>
  )
}
