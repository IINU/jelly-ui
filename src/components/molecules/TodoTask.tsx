import { IconChevronRight, IconCircle, IconCircleCheckFilled } from '@tabler/icons-react'
import { Typography } from '../atoms/Typography'
import { CSSProperties } from 'react'

type Props = {
  title: string
  subtitle?: string
  completed: boolean
  onClick: () => void
  style?: CSSProperties
}

export function TodoTask({ title, subtitle, completed, onClick, style }: Props) {
  return (
    <div
      onClick={onClick}
      style={style}
      className="jui-py-4 jui-pl-3 jui-pr-2 jui-flex jui-justify-between last:jui-border-none jui-border-b jui-border-primary-200 jui-cursor-pointer first:jui-rounded-t last:jui-rounded-b jui-bg-white jui-shadow-low"
    >
      <div className="jui-flex jui-space-x-2">
        <div className="jui-flex jui-items-center">
          {completed
            ? <IconCircleCheckFilled className="jui-text-success-400"/>
            : <IconCircle className="jui-text-primary-200"/>}
        </div>

        <div className="jui-flex jui-flex-col jui-items-start jui-justify-center">
          <Typography
            style="subtitle1"
            className={`jui-text-primary-900 jui-capitalize ${completed ? 'jui-line-through' : ''}`}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              style="subtitle2"
              className="jui-text-primary-400 jui-capitalize"
            >
              {subtitle}
            </Typography>
          )}
        </div>
      </div>

      {!completed && (
        <div className="jui-flex jui-items-center">
          <IconChevronRight className="jui-text-primary-400"/>
        </div>
      )}
    </div>
  )
}
