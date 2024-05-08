import costing from '../../assets/costing.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy4() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img src={costing} alt="Money Trending Upwards" className="w-36 h-36 mix-blend-darken"/>

      <div className="flex flex-col space-y-2">
        <Typography style="h6" className="text-primary-900">
          Real-time costing
        </Typography>

        <Typography style="caption" className="text-primary-600">
          Cost recipe, count inventory and order supplies with up-to-date prices
          and products - all in one award-winning app.
        </Typography>
      </div>
    </div>
  )
}
