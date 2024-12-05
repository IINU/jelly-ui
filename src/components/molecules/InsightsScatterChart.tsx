import { formatMoneyShort, formatValueShort } from '../../utils/utils'
import { Tooltip } from 'react-tooltip'
import { ReactNode } from 'react'

type Props<T> = {
  items: T[]
  profitExtractor: (item: T) => number
  quantityExtractor: (item: T) => number
  isBestExtractor: (item: T) => boolean
  isWorstExtractor: (item: T) => boolean
  tooltipContent: (item: T) => ReactNode
}

export function InsightsScatterChart<T>({
  items,
  profitExtractor,
  quantityExtractor,
  isBestExtractor,
  isWorstExtractor,
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
  const xValues = items.map((d) => profitExtractor(d))
  const yValues = items.map((d) => quantityExtractor(d))

  let xMin: number, xMax: number, yMin: number, yMax: number

  if (items.length === 0) {
    // Set default axes ranges when no data
    xMin = 0
    xMax = 10000
    yMin = 0
    yMax = 1000
  } else {
    xMin = Math.min(...xValues)
    xMax = Math.max(...xValues)
    yMin = Math.min(...yValues)
    yMax = Math.max(...yValues)

    // Handle case when xMin === xMax (single data point)
    if (xMin === xMax) {
      const offset = xMin !== 0 ? Math.abs(xMin * 0.1) : 1
      xMin -= offset
      xMax += offset
    }

    // Handle case when yMin === yMax (single data point)
    if (yMin === yMax) {
      const offset = yMin !== 0 ? Math.abs(yMin * 0.1) : 1
      yMin -= offset
      yMax += offset
    }
  }

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
    const denom = niceXMax - niceXMin
    if (denom === 0) {
      return leftPadding + (width - leftPadding - rightPadding) / 2
    }
    return (
      leftPadding +
      ((value - niceXMin) / denom) * (width - leftPadding - rightPadding)
    )
  }

  const yScale = (value: number) => {
    const denom = niceYMax - niceYMin
    if (denom === 0) {
      return (
        height - bottomPadding - (height - topPadding - bottomPadding) / 2
      )
    }
    return (
      height -
      bottomPadding -
      ((value - niceYMin) / denom) * (height - topPadding - bottomPadding)
    )
  }

  // Calculate averages
  const xAverage =
    items.length > 0
      ? xValues.reduce((sum, value) => sum + value, 0) / xValues.length
      : (xMin + xMax) / 2

  const yAverage =
    items.length > 0
      ? yValues.reduce((sum, value) => sum + value, 0) / yValues.length
      : (yMin + yMax) / 2

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
            {/* Background areas */}
            {/* Bottom Left Area (Light Red) */}
            <path
              d={`
                M ${leftPadding},${topPadding * 5} 
                L ${leftPadding},${height - bottomPadding} 
                L ${leftPadding + (width - leftPadding - rightPadding) * 0.4},${height - bottomPadding} 
                C ${leftPadding + (width - leftPadding - rightPadding) * 0.2},${height / 3} 
                  ${leftPadding},${topPadding * 5} 
                  ${leftPadding},${topPadding * 5} 
                Z
              `}
              fill="#FFDDD5"
            />

            {/* Top Right Area (Light Gray) */}
            <path
              d={`
                M ${width - rightPadding},${height - bottomPadding * 2} 
                L ${width - rightPadding},${topPadding} 
                L ${leftPadding + (width - leftPadding - rightPadding) * 0.6},${topPadding} 
                C ${leftPadding + (width - leftPadding - rightPadding) * 0.8},${height / 1.5} 
                  ${width - rightPadding},${height - bottomPadding * 2} 
                  ${width - rightPadding},${height - bottomPadding * 2} 
                Z
              `}
              fill="#EBEBEB"
            />

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
              stroke="#1F304A"
            />

            {/* Y-axis */}
            <line
              x1={leftPadding}
              y1={topPadding}
              x2={leftPadding}
              y2={height - bottomPadding}
              stroke="#1F304A"
            />

            {/* X-axis labels */}
            {xAxisLabels.map((value, i) => (
              <text
                key={`x-label-${i}`}
                x={xScale(value)}
                y={height - bottomPadding + 20}
                textAnchor="middle"
                fontSize={12}
                fill="#4C596E"
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
                fill="#4C596E"
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
            <rect fill="#DBDEE2" x={0} y={0} width={22} height={height} />

            {/* X-axis title */}
            <text
              x={leftPadding}
              y={height - 7}
              textAnchor="left"
              fontSize={12}
              fontWeight={500}
              fontFamily="rubik"
              fill="#4C596E"
            >
              Total Profit (£)
            </text>

            {/* Y-axis title */}
            <text
              x={-height + bottomPadding}
              y={15}
              textAnchor="left"
              fontSize={12}
              fontWeight={500}
              fontFamily="rubik"
              fill="#4C596E"
              transform={`rotate(-90)`}
            >
              Quantity Sold
            </text>

            {/* Data points */}
            {items.map((item, i) => {
              const xPos = xScale(profitExtractor(item))
              const yPos = yScale(quantityExtractor(item))
              const isBest = isBestExtractor(item)
              const isWorst = isWorstExtractor(item)
              // const isBest = i === bestIndex
              // const isWorst = i === worstIndex

              return (
                <g
                  key={`data-point-${i}`}
                  data-tooltip-id="insights-tooltip"
                  data-tooltip-content={JSON.stringify(item)}
                >
                  {isBest && items.length >= 2 ? (
                    <StarIcon x={xPos - 12} y={yPos - 12} />
                  ) : isWorst && items.length >= 2 ? (
                    <PawPrintIcon x={xPos - 12} y={yPos - 12} />
                  ) : (
                    <circle cx={xPos} cy={yPos} r={6} fill="#4C596E" />
                  )}
                </g>
              )
            })}
          </svg>
        </div>
      </div>
    </>
  )
}

// Define the StarIcon component
const StarIcon = ({ x, y }: { x: number; y: number }) => (
  <svg
    x={x}
    y={y}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M8.24301 7.34001L1.86301 8.26501L1.75001 8.28801C1.57895 8.33343 1.423 8.42342 1.2981 8.54882C1.1732 8.67421 1.08381 8.8305 1.03907 9.00174C0.994331 9.17298 0.995837 9.35302 1.04344 9.52349C1.09104 9.69395 1.18303 9.84873 1.31001 9.97201L5.93201 14.471L4.84201 20.826L4.82901 20.936C4.81854 21.1129 4.85528 21.2895 4.93546 21.4475C5.01564 21.6056 5.13639 21.7395 5.28535 21.8355C5.4343 21.9316 5.6061 21.9863 5.78316 21.9941C5.96022 22.0019 6.13617 21.9626 6.29301 21.88L11.999 18.88L17.692 21.88L17.792 21.926C17.9571 21.991 18.1365 22.011 18.3118 21.9838C18.4871 21.9566 18.652 21.8832 18.7896 21.7713C18.9272 21.6593 19.0326 21.5128 19.0948 21.3467C19.1571 21.1805 19.1741 21.0008 19.144 20.826L18.053 14.471L22.677 9.97101L22.755 9.88601C22.8664 9.74878 22.9395 9.58447 22.9667 9.40981C22.994 9.23515 22.9744 9.05639 22.9101 8.89174C22.8458 8.7271 22.7389 8.58245 22.6005 8.47253C22.4621 8.36261 22.297 8.29135 22.122 8.26601L15.742 7.34001L12.89 1.56001C12.8075 1.39255 12.6797 1.25153 12.5212 1.15292C12.3627 1.05431 12.1797 1.00204 11.993 1.00204C11.8063 1.00204 11.6233 1.05431 11.4648 1.15292C11.3063 1.25153 11.1785 1.39255 11.096 1.56001L8.24301 7.34001Z"
        fill="#4C596E"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

// Define the PawPrintIcon component
const PawPrintIcon = ({ x, y }: { x: number; y: number }) => (
  <svg
    x={x}
    y={y}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M12 10C10.68 10 10.017 10.421 9.069 11.924L8.825 12.322L8.43 13.01C8.38275 13.0946 8.33575 13.1792 8.289 13.264C8.049 13.698 7.718 14.017 7.15 14.406L6.6 14.771C5.66 15.398 5.168 15.889 4.893 16.726C4.769 17.064 4.697 17.579 4.7 18.006C4.7 19.693 5.898 21 7.5 21L7.742 20.994C7.861 20.988 7.976 20.977 8.096 20.96L8.344 20.917L8.476 20.889L8.767 20.816L8.929 20.771L9.499 20.601L10.262 20.358L10.717 20.222C11.247 20.072 11.657 20 12 20C12.344 20 12.753 20.073 13.283 20.222L13.738 20.358L14.502 20.6L15.071 20.771L15.383 20.855C15.48 20.879 15.57 20.9 15.656 20.917L15.904 20.96C16.024 20.977 16.139 20.988 16.258 20.994L16.5 21C18.102 21 19.3 19.693 19.3 18C19.3 17.573 19.227 17.061 19.093 16.694C18.857 15.97 18.416 15.471 17.613 14.864L17.356 14.674L16.828 14.294C16.186 13.824 15.825 13.468 15.575 13.016L15.305 12.531L15.053 12.099C14.042 10.403 13.435 10 12 10Z"
        fill="#4C596E"
      />
      <path
        d="M19.78 7.00003H19.75C18.531 7.02003 17.4 8.06603 16.842 9.50403C16.152 11.279 16.494 13.224 17.917 13.837C18.173 13.946 18.444 14 18.718 14C19.949 14 21.098 12.947 21.661 11.496C22.347 9.72203 22.001 7.77603 20.585 7.16403C20.3308 7.05574 20.0563 6.99995 19.78 7.00003Z"
        fill="#4C596E"
      />
      <path
        d="M9.025 3C8.913 3 8.84 3.002 8.755 3.015L8.662 3.031C7.13 3.237 6.265 5.02 6.554 6.886C6.826 8.611 8.016 10 9.474 10L9.661 9.995C9.6891 9.99261 9.71712 9.98927 9.745 9.985L9.837 9.969C11.37 9.763 12.234 7.98 11.945 6.114C11.675 4.387 10.485 3 9.025 3Z"
        fill="#4C596E"
      />
      <path
        d="M14.972 3.00001C13.513 3.00001 12.325 4.38801 12.056 6.11301C11.766 7.98001 12.63 9.76301 14.23 9.98001C14.333 9.99301 14.43 10 14.526 10C15.916 10 17.069 8.73501 17.403 7.11701L17.444 6.88701C17.734 5.02001 16.87 3.23701 15.27 3.02001C15.1712 3.00645 15.0717 2.99977 14.972 3.00001Z"
        fill="#4C596E"
      />
      <path
        d="M4.217 7.00003C3.943 7.00003 3.673 7.05403 3.42 7.16103C1.994 7.77603 1.653 9.72303 2.342 11.496C2.905 12.947 4.052 14 5.283 14C5.557 14 5.827 13.946 6.08 13.839C7.506 13.224 7.847 11.277 7.158 9.50403C6.595 8.05303 5.448 7.00003 4.217 7.00003Z"
        fill="#4C596E"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

// Helper functions for generating nice axis labels
function getTickValues(
  min: number,
  max: number,
  maxTicks: number
): number[] {
  if (
    isNaN(min) ||
    isNaN(max) ||
    !isFinite(min) ||
    !isFinite(max) ||
    maxTicks <= 0
  ) {
    return []
  }

  let range = niceNum(max - min, false)

  // If range is zero or negative, adjust min and max
  if (range <= 0) {
    const offset = Math.abs(min || 1) * 0.5
    min -= offset
    max += offset
    range = niceNum(max - min, false)
  }

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
  if (range <= 0) {
    return 1 // Default to 1 to avoid log10(0) and negative ranges
  }
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
