type DataPoint = {
  value: number
  color: string
}

type Props = {
  data: DataPoint[]
  className?: string
}

export function PieChart({ data, className }: Props) {
  const total = data.reduce(
    (acc, item) => acc + (item.value < 0 ? 0 : item.value),
    0,
  )

  let cumulativeValue = 0

  const slices = []
  for (const item of data) {
    if (item.value <= 0) {
      continue
    }

    const startAngle = (cumulativeValue / total) * 360
    cumulativeValue += item.value < 0 ? 0 : item.value
    const endAngle = (cumulativeValue / total) * 360

    slices.push({ ...item, startAngle, endAngle })
  }

  function calcOffsetStart(start: number, end: number) {
    const middleAngle = (end + start) / 2

    const offsetX = 3 * Math.sin(middleAngle * (Math.PI / 180))
    const offsetY = 3 * -Math.cos(middleAngle * (Math.PI / 180))

    return {
      x: 64 + offsetX,
      y: 64 + offsetY,
    }
  }

  return (
    <svg viewBox="0 0 128 128" className={className}>
      {slices.length < data.length && (
        <circle cx="64" cy="64" r="53" fill="#F4F5F6"/>
      )}

      {slices.reverse().map((slice, index) => {
        const { startAngle, endAngle, color } = slice
        const radius = 50

        if (startAngle === 0 && endAngle === 360) {
          return <circle key={index} cx="64" cy="64" r={radius} fill={color}/>
        }

        const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

        const start = index === 0
          ? calcOffsetStart(startAngle, endAngle)
          : { x: 64, y: 64 }

        const x1 = start.x + radius * Math.sin(startAngle * (Math.PI / 180))
        const y1 = start.y - radius * Math.cos(startAngle * (Math.PI / 180))

        const x2 = start.x + radius * Math.sin(endAngle * (Math.PI / 180))
        const y2 = start.y - radius * Math.cos(endAngle * (Math.PI / 180))

        return (
          <>
            {endAngle === 360 && (
              <path
                key={index + '-stroke'}
                d={`M${start.x},${start.y} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`}
                fill={color}
                stroke="#F4F5F6"
                strokeWidth="10"
              />
            )}

            <path
              key={index}
              d={`M${start.x},${start.y} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`}
              fill={color}
            />
          </>
        )
      })}
    </svg>
  )
}
