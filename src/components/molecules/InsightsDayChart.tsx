import { Typography } from '../atoms/Typography'
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns'
import { InsightsTooltip } from './InsightsTooltip'

export type InsightsDayChartDataPoint = {
  date: Date
} & (
  | { spend: number; sales?: number }
  | { spend?: number; sales: number }
  )

type Props = {
  startDate: Date
  data: InsightsDayChartDataPoint[]
}

export function InsightsDayChart({ startDate, data }: Props) {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  // Calculate the start and end of the month
  const monthStart = startOfMonth(startDate)
  const monthEnd = endOfMonth(startDate)

  // Calculate the start and end of the calendar view
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 })
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })

  // Generate all days in the calendar view
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  // Find the maximum sum of values in the data to normalize the bar heights
  const maxSum = Math.max(
    ...data.map((point) => (point.spend ?? 0) + (point.sales ?? 0)),
  )

  // Helper function to find the data for a specific day
  const getDataForDay = (day: Date) => {
    return data.find(
      (point) => format(point.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'),
    )
  }

  return (
    <>
      <InsightsTooltip/>

      <div className="jui-bg-white jui-p-4 jui-flex jui-justify-center">
        <div className="jui-space-y-2 jui-max-w-[24rem]">
          <div className="jui-grid jui-grid-cols-7 jui-gap-1">
            {daysOfWeek.map((day) => (
              <div key={day} className="jui-w-full jui-flex jui-justify-center">
                <Typography style="caption" className="jui-text-primary-600">
                  {day}
                </Typography>
              </div>
            ))}
          </div>

          <div className="jui-grid jui-grid-cols-7 jui-gap-1">
            {days.map((day) => {
              const isCurrentMonth = day >= monthStart && day <= monthEnd
              const dayData = getDataForDay(day)

              const spendHeight = ((dayData?.spend ?? 0) / maxSum) * 40
              const salesHeight = ((dayData?.sales ?? 0) / maxSum) * 40

              return (
                <div
                  key={day.toString()}
                  className={`jui-flex jui-flex-col jui-items-center jui-border-2 jui-border-white hover:jui-border-primary-900 hover:jui-bg-primary-900 hover:jui-text-white jui-text-primary-600 ${isCurrentMonth ? '' : 'jui-invisible'}`}
                  data-tooltip-id="insights-tooltip"
                  data-tooltip-content={JSON.stringify({
                    title: format(day, 'd MMMM'),
                    spend: dayData?.spend,
                    sales: dayData?.sales,
                  })}
                >
                  <div
                    className="jui-w-[40px] jui-h-[40px] jui-bg-primary-50 jui-flex jui-flex-col jui-justify-end"
                  >
                    <div
                      className={`jui-bg-success-400 jui-w-full`}
                      style={{ height: `${salesHeight}px` }}
                    />

                    <div
                      className={`jui-bg-secondary-400 jui-w-full`}
                      style={{ height: `${spendHeight}px` }}
                    />
                  </div>

                  <Typography style="caption">
                    {isCurrentMonth ? format(day, 'd') : ''}
                  </Typography>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
