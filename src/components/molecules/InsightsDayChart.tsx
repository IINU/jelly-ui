import { Typography } from '../atoms/Typography'
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns'
import { Tooltip } from 'react-tooltip'
import { formatMoney } from '../../utils/utils'

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
      <Tooltip
        id="day-tooltip"
        className="z-10 !bg-white !shadow-medium !p-2.5 !opacity-100 text-center"
        render={({ content }) => {
          const data = content ? JSON.parse(content) : { spend: 0, sales: undefined }

          return (
            <>
              {data.sales !== undefined && (
                <Typography style="subtitle1" className="text-success-400">
                  Sales {formatMoney(data.sales)}
                </Typography>
              )}

              {data.spend !== undefined && (
                <Typography style="subtitle1" className="text-secondary-400">
                  Spend: {formatMoney(data.spend)}
                </Typography>
              )}
            </>
          )
        }}
      />

      <div className="bg-white p-4 flex justify-center">
        <div className="space-y-2 max-w-[24rem]">
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map((day) => (
              <div key={day} className="w-full flex justify-center">
                <Typography style="caption" className="text-primary-600">
                  {day}
                </Typography>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => {
              const isCurrentMonth = day >= monthStart && day <= monthEnd
              const dayData = getDataForDay(day)

              const spendHeight = ((dayData?.spend ?? 0) / maxSum) * 40
              const salesHeight = ((dayData?.sales ?? 0) / maxSum) * 40

              return (
                <div
                  key={day.toString()}
                  className={`flex flex-col items-center border-2 border-white hover:border-primary-900 hover:bg-primary-900 hover:text-white text-primary-600 ${isCurrentMonth ? '' : 'invisible'}`}
                  data-tooltip-id="day-tooltip"
                  data-tooltip-content={JSON.stringify(dayData)}
                >
                  <div
                    className="w-[40px] h-[40px] bg-primary-100 flex flex-col justify-end"
                  >
                    <div
                      className={`bg-success-400 w-full`}
                      style={{ height: `${salesHeight}px` }}
                    />

                    <div
                      className={`bg-secondary-400 w-full`}
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
