import { Typography } from '../atoms/Typography'
import { ProgressBar } from '../atoms/ProgressBar'

type Props = {
  completed: number
  total: number
}

export function TodoTaskProgress({ completed, total }: Props) {
  return (
    <div className="jui-py-8 jui-px-4 jui-space-y-4 jui-text-center jui-shadow-low jui-bg-white jui-rounded">
      <div>
        <Typography style="caption" className="jui-text-primary-800">
          Tasks completed this week
        </Typography>

        <Typography style="caption" className="jui-text-primary-800">
          {completed} out of {total}
        </Typography>
      </div>

      <ProgressBar percentage={completed / total}/>
    </div>
  )
}
