import { Typography } from '../atoms/Typography'
import { formatMoney } from '../../utils/utils'
import { Tooltip } from 'react-tooltip'

export function InsightsTooltip() {
  return (
    <Tooltip
      id="insights-tooltip"
      className="z-10 !bg-white !shadow-medium !p-2.5 !opacity-100 text-center"
      render={({ content }) => {
        const data = content ? JSON.parse(content) : { spend: 0, sales: undefined }

        return (
          <>
            {data.title !== undefined && (
              <Typography style="subtitle1" className="text-primary-900 text-center">
                {data.title}
              </Typography>
            )}

            {data.sales !== undefined && (
              <Typography style="subtitle1" className="text-success-400">
                Sales: {formatMoney(data.sales)}
              </Typography>
            )}

            {data.spend !== undefined && (
              <Typography style="subtitle1" className="text-secondary-400">
                Spend: {formatMoney(data.spend)}
              </Typography>
            )}
          </>
        )
      }}
    />
  )
}
