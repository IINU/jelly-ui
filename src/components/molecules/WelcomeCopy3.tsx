import spending from '../../assets/spending.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy3() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img src={spending} alt="Hand Receiving Money" className="w-36 h-36 mix-blend-darken"/>

      <div className="flex flex-col space-y-2">
        <Typography style="h6" className="text-primary-900">
          Know your spend
        </Typography>

        <Typography style="caption" className="text-primary-600">
          Instant alerts when prices go up for any of your products. Receive
          daily and weekly summaries of your spending and gross profit margins.
        </Typography>
      </div>
    </div>
  )
}
