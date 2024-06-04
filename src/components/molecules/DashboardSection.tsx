import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title: string
  children: ReactNode
}

export function DashboardSection({ title, children }: Props) {
  return (
    <>
      <div className="p-4 text-primary-800">
        <Typography style="subtitle2">{title}</Typography>
      </div>

      <div className="px-4 pb-2 space-y-4">
        {children}
      </div>
    </>
  )
}
