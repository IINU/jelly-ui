import receiveMoneyLarge from '../../assets/receive-money-large.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy3() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <img src={receiveMoneyLarge} alt="Hand Receiving Money" className="w-24 h-24"/>

      <div className="flex flex-col space-y-2">
        <Typography style="h6" className="text-primary-900">
          Know your spend
        </Typography>

        <Typography style="caption" className="text-primary-600">
          Get instant alerts when prices go up for any of your products. As well
          as receive daily and weekly summaries of your spending and gross
          profit margins.
        </Typography>
      </div>
    </div>
  )
}
