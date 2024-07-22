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
      className="py-4 pl-3 pr-2 flex justify-between last:border-none border-b border-primary-200 cursor-pointer first:rounded-t last:rounded-b bg-white shadow-low"
    >
      <div className="flex space-x-2">
        <div className="flex items-center">
          {completed
            ? <IconCircleCheckFilled className="text-success-400"/>
            : <IconCircle className="text-primary-200"/>}
        </div>

        <div className="flex flex-col items-start justify-center">
          <Typography
            style="subtitle1"
            className={`text-primary-900 ${completed ? 'line-through' : ''}`}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              style="subtitle2"
              className="text-primary-400"
            >
              {subtitle}
            </Typography>
          )}
        </div>
      </div>

      {!completed && (
        <div className="flex items-center">
          <IconChevronRight className="text-primary-400"/>
        </div>
      )}
    </div>
  )
}
