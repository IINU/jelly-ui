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
      className="py-4 pl-3 pr-2 flex justify-between border-t border-primary-200 cursor-pointer"
    >
      <div className="flex space-x-2">
        <div className="flex items-center">
          {completed
            ? <IconCircleCheckFilled className="text-success-400"/>
            : <IconCircle className="text-primary-200"/>}
        </div>

        <Typography style="subtitle1" className="text-primary-900">
          {text}
        </Typography>
      </div>

      {!completed && (
        <div className="flex items-center">
          <IconChevronRight className="text-primary-400"/>
        </div>
      )}
    </div>
  )
}
