import { AppLayout } from '../layouts/AppLayout'
import { PeriodSelector } from '../components/molecules/PeriodSelector'
import { ComponentType, useState } from 'react'
import { IconCalendarMonth } from '@tabler/icons-react'
import { InsightsDateNavigator } from '../components/molecules/InsightsDateNavigator'
import { InfoAlert } from '../components/molecules/InfoAlert'
import { InsightsBarChart } from '../components/molecules/InsightsBarChart'
import { InsightsDayChart } from '../components/molecules/InsightsDayChart'
import {
  eachDayOfInterval,
  eachMonthOfInterval,
  endOfMonth,
  endOfQuarter,
  endOfWeek,
  format,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
} from 'date-fns'
import { InsightsLineChart } from '../components/molecules/InsightsLineChart'
import { InsightsStockRangeSelect } from '../components/molecules/InsightsStockRangeSelect'
import { formatMoney } from '../utils/utils'
import { InsightsListGroup } from '../components/molecules/InsightsListGroup'
import { InsightsListItem } from '../components/molecules/InsightsListItem'

type DashboardPeriod = {
  id: string
  label: string
  title: string
  subtitle: string
  icon: ComponentType<{ className?: string }>
}

type StockTake = {
  id: number
  name: string
  value: number
  createdAt: Date
}

export function InsightsFlashShowcase() {
  const periods: DashboardPeriod[] = [
    {
      id: 'week',
      label: 'This Calendar Week',
      title: 'Calendar Week',
      subtitle: 'From Monday to Sunday',
      icon: IconCalendarMonth,
    },
    {
      id: 'month',
      label: 'This Calendar Month',
      title: 'Calendar Month',
      subtitle: 'From the 1st to the last day of each month',
      icon: IconCalendarMonth,
    },
    {
      id: 'quarter',
      label: 'This Calendar Quarter',
      title: 'Calendar Quarter',
      subtitle: 'From the 1st of Month 1 to the last day of Month 3',
      icon: IconCalendarMonth,
    },
  ]

  const [period, setPeriod] = useState<DashboardPeriod>(periods[0])

  function generateFakeData(startDate: Date) {
    const monthStart = startOfMonth(startDate)
    const monthEnd = endOfMonth(startDate)
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

    return days.map((day) => ({
      date: day,
      spend: Math.floor(Math.random() * 2500),
      sales: Math.floor(Math.random() * 2500),
    }))
  }

  function generateFakeLineData(startDate: Date) {
    const yearStart = startOfQuarter(startDate)
    const yearEnd = endOfQuarter(startDate)
    const months = eachMonthOfInterval({ start: yearStart, end: yearEnd })

    return months.map((month) => ({
      date: month,
      spend: Math.floor(Math.random() * 1000000),
      sales: Math.floor(Math.random() * 1000000),
    }))
  }

  function generateFakeFlashData(startDate: Date) {
    const yearStart = startOfWeek(startDate, { weekStartsOn: 1 })
    const yearEnd = endOfWeek(startDate, { weekStartsOn: 1 })
    const days = eachDayOfInterval({ start: yearStart, end: yearEnd })

    return days.map((day) => {
      return Math.random() > 0.5
        ? {
          date: day,
          sales: Math.floor(Math.random() * 10000),
        }
        : {
          date: day,
          sales: undefined,
        }
    })
  }

  return (
    <AppLayout
      state="tabbed"
      title="Insights"
      tabs={['Spend', 'Flash', 'Price alert']}
      activeTab={1}
      actionButton="Add Invoices"
    >
      <div className="h-12 flex items-center justify-center bg-primary-50">
        <PeriodSelector
          periods={periods}
          value={period}
          onChange={setPeriod}
          labelExtractor={p => p.label}
          titleExtractor={p => p.title}
          subtitleExtractor={p => p.subtitle}
          iconExtractor={p => p.icon}
        />
      </div>

      <InfoAlert
        text="Add opening and closing stock for the most accurate actual GP."
      />

      <InsightsStockRangeSelect<StockTake>
        stockTakes={[
          { id: 1, name: 'Sunday Stock', value: 20030.24, createdAt: new Date() },
          { id: 2, name: 'Xmas Stock', value: 10030.24, createdAt: new Date() },
          { id: 3, name: 'Fridge', value: 5030.24, createdAt: new Date() },
        ]}
        onChange={() => void 0}
        optionToId={s => s.id}
        optionToLabel={s => `${s.name} (${format(s.createdAt, 'EEE d MMM yy')} ${formatMoney(s.value)})`}
        optionToValue={s => s.value}
      />

      <InsightsDateNavigator
        heading="July"
        title="£24,021.25"
        subtitle={(
          <>
            <span className="font-medium">2%</span>{' '}
            from last week
            <br/>
          </>
        )}
        back={() => console.log('hi')}
        forward={() => console.log('hi')}
      />

      {period.id === periods[0].id && (
        <InsightsBarChart
          data={[
            { label: 'M', spend: 25000, sales: 50000 },
            { label: 'T', spend: 31000, sales: 50000 },
            { label: 'W', spend: 111000, sales: 50000 },
            { label: 'T', spend: 20000, sales: 50000 },
            { label: 'F', spend: 40000, sales: 50000 },
            { label: 'S', spend: 60000, sales: 50000 },
            { label: 'S', spend: 80000, sales: 50000 },
          ]}
        />
      )}

      {period.id === periods[1].id && (
        <InsightsDayChart
          startDate={new Date()}
          data={generateFakeData(new Date())}
        />
      )}

      {period.id === periods[2].id && (
        <InsightsLineChart
          data={generateFakeLineData(new Date())}
        />
      )}

      <InsightsListGroup title="By sales">
        {generateFakeFlashData(new Date()).map(data => (
          <InsightsListItem
            key={data.date.toString()}
            title={format(data.date, 'd MMMM')}
            subtitle={format(data.date, 'iiii')}
            accent="success"
            onClick={() => void 0}
            data={data.sales ? formatMoney(data.sales) : 'Add'}
          />
        ))}
      </InsightsListGroup>
    </AppLayout>
  )
}
