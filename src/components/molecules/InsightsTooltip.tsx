import { Typography } from '../atoms/Typography'
import { formatMoney } from '../../utils/utils'
import { Tooltip } from 'react-tooltip'

export function InsightsTooltip() {
  return (
    <Tooltip
      id="insights-tooltip"
      className="jui-z-10 !jui-bg-white !jui-shadow-medium !jui-p-2.5 !jui-opacity-100 jui-text-center"
      render={({ content }) => {
        const data = content ? JSON.parse(content) : { spend: 0, sales: undefined }

        return (
          <>
            {data.title !== undefined && (
              <Typography style="subtitle1" className="jui-text-primary-900 jui-text-center">
                {data.title}
              </Typography>
            )}

            {data.sales !== undefined && (
              <Typography style="subtitle1" className="jui-text-success-400">
                Sales: {formatMoney(data.sales)}
              </Typography>
            )}

            {data.spend !== undefined && (
              <Typography style="subtitle1" className="jui-text-secondary-400">
                Spend: {formatMoney(data.spend)}
              </Typography>
            )}
          </>
        )
      }}
    />
  )
}
