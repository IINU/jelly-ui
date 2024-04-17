import basketLarge from '../../assets/basket-large.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy4() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <img src={basketLarge} alt="Shopping Basket" className="w-24 h-24"/>

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