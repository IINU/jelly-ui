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
    <div className="jui-bg-white jui-space-y-2 jui-py-8 jui-w-full jui-rounded-lg jui-shadow-low jui-text-center">
      <Typography style="subtitle1" className="jui-text-primary-800">
        {title}
      </Typography>

      <Typography style="h4" className="jui-text-primary-900">
        {data}
      </Typography>

      <div className="jui-flex jui-justify-center">
        <div className="jui-relative jui-flex jui-justify-center jui-max-w-[26rem] jui-w-full">
          <div className="jui-realtive jui-w-64 jui-h-64">
            <PieChart data={pieChartData} className="jui-w-64 jui-h-64"/>

            <div className="jui-absolute jui-top-0 jui-right-0 jui-text-right jui-px-8 jui-z-10">
              <Typography style="subtitle1" className="jui-text-primary-800">{dataPoint1.text}</Typography>
              <Typography style="h6" className="jui-text-error-400">{dataPoint1.value}%</Typography>
            </div>

            <div className="jui-absolute jui-bottom-0 jui-left-0 jui-text-left jui-px-8 jui-z-10">
              <Typography style="subtitle1" className="jui-text-primary-800">{dataPoint2.text}</Typography>
              <Typography style="h6" className="jui-text-success-400">{dataPoint2.value}%</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
