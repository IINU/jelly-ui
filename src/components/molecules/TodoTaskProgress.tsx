import { Typography } from '../atoms/Typography'
import { ProgressBar } from '../atoms/ProgressBar'

type Props = {
  completed: number
  total: number
}

export function TodoTaskProgress({ completed, total }: Props) {
  return (
    <div className="py-8 px-4 space-y-4 text-center shadow-low bg-white rounded">
      <div>
        <Typography style="caption" className="text-primary-800">
          Tasks completed this week
        </Typography>

        <Typography style="caption" className="text-primary-800">
          {completed} out of {total}
        </Typography>
      </div>

      <ProgressBar percentage={completed / total}/>
    </div>
  )
}
