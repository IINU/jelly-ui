import { PieChart } from '../atoms/PieChart'
import { Typography } from '../atoms/Typography'

type DataPoint = {
  text: string
  value: number
}

type Props = {
  title: string
  data: string
  dataPoint1: DataPoint
  dataPoint2: DataPoint
}

export function DashboardPieChart({ title, data, dataPoint1, dataPoint2 }: Props) {
  const pieChartData = [
    {
      value: dataPoint1.value,
      color: '#FF7859',
    },
    {
      value: dataPoint2.value,
      color: '#A7C242',
    },
  ]

  return (
    <div className="bg-white space-y-2 py-8 w-full rounded-lg shadow-low text-center">
      <Typography style="subtitle1" className="text-primary-800">
        {title}
      </Typography>

      <Typography style="h4" className="text-primary-900">
        {data}
      </Typography>

      <div className="flex justify-center">
        <div className="relative flex justify-center max-w-[26rem] w-full">
          <div className="realtive w-64 h-64">
            <PieChart data={pieChartData} className="w-64 h-64"/>

            <div className="absolute top-0 right-0 text-right px-8 z-10">
              <Typography style="subtitle1" className="text-primary-800">{dataPoint1.text}</Typography>
              <Typography style="h6" className="text-error-400">{dataPoint1.value}%</Typography>
            </div>

            <div className="absolute bottom-0 left-0 text-left px-8 z-10">
              <Typography style="subtitle1" className="text-primary-800">{dataPoint2.text}</Typography>
              <Typography style="h6" className="text-success-400">{dataPoint2.value}%</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
