import { Typography } from '../atoms/Typography'
import { Tooltip } from 'react-tooltip'
import { formatMoney } from '../../utils/utils'

export type InsightsBarChartDataPoint = {
  label: string
} & (
  | { spend: number; sales?: number }
  | { spend?: number; sales: number }
  )

type Props = {
  data: InsightsBarChartDataPoint[]
}

export function InsightsBarChart({ data }: Props) {
  const maxValue = Math.max(...data.map(item => Math.max(item.spend ?? 0, item.sales ?? 0)))
  const axisLabels = Array.from({ length: 3 }, (_, i) => Math.round(maxValue / 2 * i)).reverse()

  return (
    <>
      <Tooltip
        id="bar-tooltip"
        className="z-10 !bg-white !shadow-medium !font-rubik !text-base !font-medium !p-2.5 !opacity-100"
      />

      <div className="bg-white p-4 flex">
        <div className="flex flex-col justify-between h-64 mr-2">
          {axisLabels.map((label, index) => (
            <Typography
              key={index}
              style="body2"
              className="text-right text-primary-600"
            >
              {formatMoney(label)}
            </Typography>
          ))}
        </div>

        <div className="w-full">
          <div className="flex justify-around h-64 w-full relative border-b border-primary-200">
            {data.map((item, index) => (
              <div key={index} className="flex items-end justify-center space-x-0.5 w-full">
                {item.spend !== undefined && (
                  <div
                    data-tooltip-id="bar-tooltip"
                    data-tooltip-content={'Spend: ' + formatMoney(item.spend)}
                    data-tooltip-class-name="!text-secondary-400"
                    className="w-2.5 flex items-end justify-center relative rounded-t-full bg-secondary-400"
                    style={{ height: `${(item.spend / maxValue) * 100}%` }}
                  />
                )}

                {item.sales !== undefined && (
                  <div
                    data-tooltip-id="bar-tooltip"
                    data-tooltip-content={'Sales: ' + formatMoney(item.sales)}
                    data-tooltip-class-name="!text-success-400"
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
                  {item.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
