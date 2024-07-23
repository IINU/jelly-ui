import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title?: string
  rightTitle?: string
  className?: string
  children: ReactNode
}

export function DetailsSection({
  title,
  rightTitle,
  className = 'jui-py-6 jui-px-4',
  children,
}: Props) {
  return (
    <>
      {title && (
        <div className="jui-py-2 jui-px-3 jui-bg-primary-100 jui-flex jui-items-center jui-justify-between">
          <Typography style="subtitle2" className="jui-text-primary-800">
            {title}
          </Typography>

          {rightTitle && (
            <Typography style="button" className="jui-text-primary-800">
              {rightTitle}
            </Typography>
          )}
        </div>
      )}

      <div className={className}>
        {children}
      </div>
    </>
  )
}
