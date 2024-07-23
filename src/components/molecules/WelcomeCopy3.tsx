import spending from '../../assets/spending.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy3() {
  return (
    <div className="jui-flex jui-flex-col jui-items-center jui-space-y-3">
      <img src={spending} alt="Hand Receiving Money" className="jui-w-36 jui-h-36 jui-mix-blend-darken"/>

      <div className="jui-flex jui-flex-col jui-space-y-2">
        <Typography style="h6" className="jui-text-primary-900">
          Know your spend
        </Typography>

        <Typography style="caption" className="jui-text-primary-600">
          Instant alerts when prices go up for any of your products. Receive
          daily and weekly summaries of your spending and gross profit margins.
        </Typography>
      </div>
    </div>
  )
}
