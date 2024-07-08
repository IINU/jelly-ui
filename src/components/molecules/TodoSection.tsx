import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title: string
  children: ReactNode
}

export function TodoSection({ title, children }: Props) {
  return (
    <div className="space-y-6">
      <Typography style="subtitle2" className="text-primary-800">
        {title}
      </Typography>

      <div>
        {children}
      </div>
    </div>
  )
}
