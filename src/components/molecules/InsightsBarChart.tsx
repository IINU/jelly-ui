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

      <div className="jui-bg-white jui-p-4 jui-flex">
        <div className="jui-flex jui-flex-col jui-justify-between jui-h-64 jui-mr-2">
          <Typography
            style="body2"
            className="jui-text-right jui-text-primary-600"
          >
            {formatMoneyShort(maxValue)}
          </Typography>

          <Typography
            style="body2"
            className="jui-text-right jui-text-primary-600"
          >
            {formatMoney(0)}
          </Typography>
        </div>

        <div className="jui-w-full">
          <div className="jui-flex jui-justify-around jui-h-64 jui-w-full jui-relative jui-border-b jui-border-primary-200">
            {data.map((item) => (
              <div key={format(item.date, 'yyyy-MM-dd')} className="jui-flex jui-items-end jui-justify-center jui-space-x-0.5 jui-w-full">
                {item.spend !== undefined && (
                  <div
                    data-tooltip-id="insights-tooltip"
                    data-tooltip-content={JSON.stringify({ title: format(item.date, 'd MMMM'), spend: item.spend })}
                    className="jui-w-2.5 jui-flex jui-items-end jui-justify-center jui-relative jui-rounded-t-full jui-bg-secondary-400"
                    style={{ height: `${(item.spend / maxValue) * 100}%` }}
                  />
                )}

                {item.sales !== undefined && (
                  <div
                    data-tooltip-id="insights-tooltip"
                    data-tooltip-content={JSON.stringify({ title: format(item.date, 'd MMMM'), sales: item.sales })}
                    className="jui-w-2.5 jui-flex jui-items-end jui-justify-center jui-relative jui-rounded-t-full jui-bg-success-400"
                    style={{ height: `${(item.sales / maxValue) * 100}%` }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="jui-flex jui-justify-around jui-w-full">
            {data.map((item, index) => (
              <div key={index} className="jui-w-full jui-flex jui-justify-center">
                <Typography style="caption" className="jui-text-primary-600">
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
