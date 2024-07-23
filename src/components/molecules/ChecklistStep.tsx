import { IconChevronRight, IconCircle, IconCircleCheckFilled } from '@tabler/icons-react'
import { Typography } from '../atoms/Typography'

type Props = {
  text: string
  completed: boolean
  onClick: () => void
}

export function ChecklistStep({ text, completed, onClick }: Props) {
  return (
    <div
      onClick={() => !completed && onClick()}
      className="jui-py-4 jui-pl-3 jui-pr-2 jui-flex jui-justify-between jui-border-t jui-border-primary-200 jui-cursor-pointer"
    >
      <div className="jui-flex jui-space-x-2">
        <div className="jui-flex jui-items-center">
          {completed
            ? <IconCircleCheckFilled className="jui-text-success-400"/>
            : <IconCircle className="jui-text-primary-200"/>}
        </div>

        <Typography
          style="subtitle1"
          className={`jui-text-primary-900 ${completed ? 'jui-line-through' : ''}`}
        >
          {text}
        </Typography>
      </div>

      {!completed && (
        <div className="jui-flex jui-items-center">
          <IconChevronRight className="jui-text-primary-400"/>
        </div>
      )}
    </div>
  )
}
