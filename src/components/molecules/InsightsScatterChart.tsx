import { formatMoneyShort, formatValueShort } from '../../utils/utils'
import { Tooltip } from 'react-tooltip'
import { ReactNode } from 'react'

type Props<T> = {
  items: T[];
  profitExtractor: (item: T) => number;
  quantityExtractor: (item: T) => number;
  tooltipContent: (item: T) => ReactNode;
};

export function InsightsScatterChart<T>({
  items,
  profitExtractor,
  quantityExtractor,
  tooltipContent,
}: Props<T>) {
  // SVG dimensions and padding
  const width = 650
  const height = 280

  // Individual padding values
  const leftPadding = 72
  const rightPadding = 20
  const topPadding = 20
  const bottomPadding = 56

  // Get min and max values for scaling
  const xValues = items.map(d => profitExtractor(d))
  const yValues = items.map(d => quantityExtractor(d))

  const xMin = Math.min(...xValues)
  const xMax = Math.max(...xValues)
  const yMin = Math.min(...yValues)
  const yMax = Math.max(...yValues)

  // Generate axis labels with nice intervals
  const maxTicks = 5 // Maximum number of ticks on each axis
  const xAxisLabels = getTickValues(xMin, xMax, maxTicks)
  const yAxisLabels = getTickValues(yMin, yMax, maxTicks)

  // Update min and max to the nice values for scaling
  const niceXMin = xAxisLabels[0]
  const niceXMax = xAxisLabels[xAxisLabels.length - 1]
  const niceYMin = yAxisLabels[0]
  const niceYMax = yAxisLabels[yAxisLabels.length - 1]

  // Scale functions
  const xScale = (value: number) => {
    return (
      leftPadding +
      ((value - niceXMin) / (niceXMax - niceXMin)) * (width - leftPadding - rightPadding)
    )
  }

  const yScale = (value: number) => {
    return (
      height -
      bottomPadding -
      ((value - niceYMin) / (niceYMax - niceYMin)) * (height - topPadding - bottomPadding)
    )
  }

  // Calculate averages
  const xAverage =
    xValues.reduce((sum, value) => sum + value, 0) / xValues.length
  const yAverage =
    yValues.reduce((sum, value) => sum + value, 0) / yValues.length

  return (
    <>
      <Tooltip
        id="insights-tooltip"
        className="jui-z-10 !jui-bg-white !jui-shadow-medium !jui-p-2.5 !jui-opacity-100 jui-text-center"
        render={({ content }) => {
          if (!content) {
            return <h1>Something has gone wrong here.</h1>
          }

          const item = JSON.parse(content) as T

          return tooltipContent(item)
        }}
      />

      <div className="jui-flex jui-justify-center jui-py-3 jui-px-4">
        <div className="jui-overflow-x-scroll jui-max-w-full">
          <svg width={width} height={height} className="jui-bg-white">
            {/* Average X line (Vertical) */}
            <line
              x1={xScale(xAverage)}
              y1={yScale(niceYMin)}
              x2={xScale(xAverage)}
              y2={yScale(niceYMax)}
              stroke="#1F304A"
              strokeDasharray="4 4"
            />

            {/* Average Y line (Horizontal) */}
            <line
              x1={xScale(niceXMin)}
              y1={yScale(yAverage)}
              x2={xScale(niceXMax)}
              y2={yScale(yAverage)}
              stroke="#1F304A"
              strokeDasharray="4 4"
            />

            {/* X-axis */}
            <line
              x1={leftPadding}
              y1={height - bottomPadding}
              x2={width - rightPadding}
              y2={height - bottomPadding}
              stroke="#DBDEE2"
            />

            {/* Y-axis */}
            <line
              x1={leftPadding}
              y1={topPadding}
              x2={leftPadding}
              y2={height - bottomPadding}
              stroke="#DBDEE2"
            />

            {/* X-axis labels */}
            {xAxisLabels.map((value, i) => (
              <text
                key={`x-label-${i}`}
                x={xScale(value)}
                y={height - bottomPadding + 20}
                textAnchor="middle"
                fontSize={12}
                fill="#798392"
              >
                {formatMoneyShort(value)}
              </text>
            ))}

            {/* Y-axis labels */}
            {yAxisLabels.map((value, i) => (
              <text
                key={`y-label-${i}`}
                x={leftPadding - 10}
                y={yScale(value) + 5}
                textAnchor="end"
                fontSize={12}
                fill="#798392"
              >
                {formatValueShort(value)}
              </text>
            ))}

            {/* X-axis title background */}
            <rect
              fill="#DBDEE2"
              x={0}
              y={height - 22}
              width={width}
              height={22}
            />

            {/* Y-axis title background */}
            <rect
              fill="#DBDEE2"
              x={0}
              y={0}
              width={22}
              height={height}
            />

            {/* X-axis title */}
            <text
              x={68}
              y={height - 7}
              textAnchor="middle"
              fontSize={12}
              fontWeight={500}
              fontFamily="rubik"
              fill="#4C596E"
            >
              Total Profit (£)
            </text>

            {/* Y-axis title */}
            <text
              x={-230}
              y={15}
              textAnchor="middle"
              fontSize={12}
              fontWeight={500}
              fontFamily="rubik"
              fill="#4C596E"
              transform={`rotate(-90)`}
            >
              Qty Sold
            </text>

            {/* Data points */}
            {items.map((item, i) => (
              <circle
                key={`data-point-${i}`}
                cx={xScale(profitExtractor(item))}
                cy={yScale(quantityExtractor(item))}
                r={6}
                fill="#48B7E3"
                data-tooltip-id="insights-tooltip"
                data-tooltip-content={JSON.stringify(item)}
              />
            ))}
          </svg>
        </div>
      </div>
    </>
  )
}

// Helper functions for generating nice axis labels
function getTickValues(min: number, max: number, maxTicks: number): number[] {
  const range = niceNum(max - min, false)
  const tickSpacing = niceNum(range / (maxTicks - 1), true)
  const niceMin = Math.floor(min / tickSpacing) * tickSpacing
  const niceMax = Math.ceil(max / tickSpacing) * tickSpacing
  const tickValues = []
  for (let i = niceMin; i <= niceMax; i += tickSpacing) {
    tickValues.push(i)
  }
  return tickValues
}

function niceNum(range: number, round: boolean): number {
  const exponent = Math.floor(Math.log10(range))
  const fraction = range / Math.pow(10, exponent)
  let niceFraction: number

  if (round) {
    if (fraction < 1.5) {
      niceFraction = 1
    } else if (fraction < 3) {
      niceFraction = 2
    } else if (fraction < 7) {
      niceFraction = 5
    } else {
      niceFraction = 10
    }
  } else {
    if (fraction <= 1) {
      niceFraction = 1
    } else if (fraction <= 2) {
      niceFraction = 2
    } else if (fraction <= 5) {
      niceFraction = 5
    } else {
      niceFraction = 10
    }
  }

  return niceFraction * Math.pow(10, exponent)
}
