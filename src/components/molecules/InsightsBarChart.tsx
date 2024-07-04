import { Typography } from '../atoms/Typography'
import { formatMoney, formatMoneyShort, roundValueUp } from '../../utils/utils'
import { InsightsTooltip } from './InsightsTooltip'
import { format } from 'date-fns'

export type InsightsBarChartDataPoint = {
  date: Date
} & (
  | { spend: number; sales?: number }
  | { spend?: number; sales: number }
  )

type Props = {
  data: InsightsBarChartDataPoint[]
}

export function InsightsBarChart({ data }: Props) {
  const maxValue = roundValueUp(
    Math.max(...data.map(item => Math.max(item.spend ?? 0, item.sales ?? 0)))
  )

  return (
    <>
      <InsightsTooltip/>

      <div className="bg-white p-4 flex">
        <div className="flex flex-col justify-between h-64 mr-2">
          <Typography
            style="body2"
            className="text-right text-primary-600"
          >
            {formatMoneyShort(maxValue)}
          </Typography>

          <Typography
            style="body2"
            className="text-right text-primary-600"
          >
            {formatMoney(0)}
          </Typography>
        </div>

        <div className="w-full">
          <div className="flex justify-around h-64 w-full relative border-b border-primary-200">
            {data.map((item, index) => (
              <div key={index} className="flex items-end justify-center space-x-0.5 w-full">
                {item.spend !== undefined && (
                  <div
                    data-tooltip-id="insights-tooltip"
                    data-tooltip-content={JSON.stringify({ title: format(item.date, 'd MMMM'), spend: item.spend })}
                    className="w-2.5 flex items-end justify-center relative rounded-t-full bg-secondary-400"
                    style={{ height: `${(item.spend / maxValue) * 100}%` }}
                  />
                )}

                {item.sales !== undefined && (
                  <div
                    data-tooltip-id="insights-tooltip"
                    data-tooltip-content={JSON.stringify({ title: format(item.date, 'd MMMM'), sales: item.sales })}
                    className="w-2.5 flex items-end justify-center relative rounded-t-full bg-success-400"
                    style={{ height: `${(item.sales / maxValue) * 100}%` }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-around w-full">
            {data.map((item, index) => (
              <div key={index} className="w-full flex justify-center">
                <Typography style="caption" className="text-primary-600">
                  {format(item.date, 'iiiii')}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
