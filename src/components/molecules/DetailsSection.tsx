import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title?: string
  rightTitle?: string
  children: ReactNode
}

export function DetailsSection({ title, rightTitle, children }: Props) {
  return (
    <>
      {title && (
        <div className="py-2 px-3 bg-primary-100 flex items-center justify-between">
          <Typography style="subtitle2" className="text-primary-800">
            {title}
          </Typography>

          {rightTitle && (
            <Typography style="button" className="text-primary-800">
              {rightTitle}
            </Typography>
          )}
        </div>
      )}

      <div className="py-6 px-4">
        {children}
      </div>
    </>
  )
}
