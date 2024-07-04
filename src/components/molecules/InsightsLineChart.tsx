import { format, formatDate } from 'date-fns'
import { formatMoneyShort, roundValueUp } from '../../utils/utils'
import { InsightsTooltip } from './InsightsTooltip'

export type InsightsDayChartDataPoint = {
  date: Date
} & (
  | { spend: number; sales?: number }
  | { spend?: number; sales: number }
  )

type Props = {
  data: InsightsDayChartDataPoint[]
}

export function InsightsLineChart({ data }: Props) {
  // Get max value for scaling
  const maxValue = roundValueUp(
    Math.max(...data.map(d => Math.max(d.spend ?? 0, d.sales ?? 0))),
  )

  // SVG dimensions and padding
  const width = 320
  const height = 256

  const yPadding = 20
  const xPadding = 40  // Adjust xPadding to give space for y-axis labels

  // Scale functions
  const xScale = (date: Date) => {
    const months = data.map(d => d.date.getTime())
    const minDate = Math.min(...months)
    const maxDate = Math.max(...months)
    return ((date.getTime() - minDate) / (maxDate - minDate)) * (width - xPadding * 2) + xPadding
  }

  const yScale = (value: number) => {
    const scale = maxValue <= 0 ? 0 : (value / maxValue)

    return height - yPadding - (scale * (height - yPadding * 2))
  }

  // Spend line path
  const spendLine = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${xScale(d.date) + 16},${yScale(d.spend ?? 0)}`)
    .join(' ')

  // Sales line path
  const salesLine = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${xScale(d.date) + 16},${yScale(d.sales ?? 0)}`)
    .join(' ')

  // Generate y-axis labels
  const yAxisLabels = Array.from({ length: 2 }, (_, i) => {
    const value = maxValue * i

    return {
      value,
      y: yScale(value),
    }
  })

  return (
    <>
      <InsightsTooltip/>

      <div className="py-6 bg-white flex justify-center">
        <svg className="w-80 h-64">
          {/* Axes */}
          <line
            x1={xPadding + 6}
            y1={height - yPadding}
            x2={width}
            y2={height - yPadding}
            stroke="#DBDEE2"
          />

          {/* y-axis labels and grid lines */}
          {yAxisLabels.map(({ value, y }, i) => (
            <text
              key={`y-label-${i}`}
              x={xPadding}
              y={y + 5}
              textAnchor="end"
              fontSize={14}
              fontFamily="lato"
              fontWeight={400}
              fill="#798392"
            >
              {formatMoneyShort(value)}
            </text>
          ))}

          {/* Spend Line */}
          {data.every(d => d.spend !== undefined) && (
            <path d={spendLine} fill="none" stroke="#48B7E3" strokeWidth={2}/>
          )}

          {data.every(d => d.spend !== undefined) && data.map((d, i) => (
            <circle
              key={`spend-circle-${i}`}
              data-tooltip-id="insights-tooltip"
              data-tooltip-content={JSON.stringify({ title: format(d.date, 'MMMM'), spend: d.spend })}
              cx={xScale(d.date) + 16}
              cy={yScale(d.spend ?? 0)}
              r={6}
              fill="#48B7E3"
            />
          ))}

          {/* Sales Line */}
          {data.every(d => d.sales !== undefined) && (
            <path d={salesLine} fill="none" stroke="#A7C242" strokeWidth={2}/>
          )}

          {data.every(d => d.sales !== undefined) && data.map((d, i) => (
            <circle
              key={`sale-circle-${i}`}
              data-tooltip-id="insights-tooltip"
              data-tooltip-content={JSON.stringify({ title: format(d.date, 'MMMM'), sales: d.sales })}
              cx={xScale(d.date) + 16}
              cy={yScale(d.sales ?? 0)}
              r={6}
              fill="#A7C242"
            />
          ))}

          {/* Labels */}
          {data.map((d, i) => (
            <text
              key={`x-label-${i}`}
              x={xScale(d.date) + 16}
              y={height - 2}
              textAnchor="middle"
              fontSize={14}
              fontFamily="lato"
              fontWeight={700}
              fill="#798392"
            >
              {formatDate(d.date, 'MMM yy')}
            </text>
          ))}
        </svg>
      </div>
    </>
  )
}
