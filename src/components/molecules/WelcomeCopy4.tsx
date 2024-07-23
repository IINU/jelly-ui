import costing from '../../assets/costing.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy4() {
  return (
    <div className="jui-flex jui-flex-col jui-items-center jui-space-y-3">
      <img src={costing} alt="Money Trending Upwards" className="jui-w-36 jui-h-36 jui-mix-blend-darken"/>

      <div className="jui-flex jui-flex-col jui-space-y-2">
        <Typography style="h6" className="jui-text-primary-900">
          Real-time costing
        </Typography>

        <Typography style="caption" className="jui-text-primary-600">
          Cost recipe, count inventory and order supplies with up-to-date prices
          and products - all in one award-winning app.
        </Typography>
      </div>
    </div>
  )
}
