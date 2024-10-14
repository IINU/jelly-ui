import { ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title: string
  rightContent?: ReactNode
  children: ReactNode
}

export function InsightsListGroup({ title, rightContent, children }: Props) {
  return (
    <div>
      <div className="jui-px-3 jui-bg-primary-100 jui-flex jui-items-center jui-justify-between">
        <div className="jui-py-2">
          <Typography style="subtitle2" className="jui-text-primary-800">
            {title}
          </Typography>
        </div>

        {rightContent}
      </div>

      {children}
    </div>
  )
}
