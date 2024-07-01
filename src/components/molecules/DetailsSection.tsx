import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title?: string
  children: ReactNode
}

export function DetailsSection({ title, children }: Props) {
  return (
    <>
      {title && (
        <div className="py-2 px-3 bg-primary-100">
          <Typography style="subtitle2" className="text-primary-800">
            {title}
          </Typography>
        </div>
      )}

      <div className="py-6 px-4">
        {children}
      </div>
    </>
  )
}
