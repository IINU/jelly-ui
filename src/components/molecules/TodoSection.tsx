import { CSSProperties, ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title: string
  children: ReactNode
  style?: CSSProperties
}

export function TodoSection({ title, children, style }: Props) {
  return (
    <div className="space-y-6" style={style}>
      <Typography style="subtitle2" className="text-primary-800">
        {title}
      </Typography>

      <div>
        {children}
      </div>
    </div>
  )
}
