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
  startOfMonth,
  startOfQuarter,
} from 'date-fns'
import { InsightsLineChart } from '../components/molecules/InsightsLineChart'
import { InsightsListItem } from '../components/molecules/InsightsListItem'
import { formatMoney } from '../utils/utils'
import { InsightsListGroup } from '../components/molecules/InsightsListGroup'
import { Typography } from '../components/atoms/Typography'

type DashboardPeriod = {
  id: string
  label: string
  title: string
  subtitle: string
  icon: ComponentType<{ className?: string }>
}

export function InsightsSpendShowcase() {
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
    }))
  }

  function generateFakeLineData(startDate: Date) {
    const yearStart = startOfQuarter(startDate)
    const yearEnd = endOfQuarter(startDate)
    const months = eachMonthOfInterval({ start: yearStart, end: yearEnd })

    return months.map((month) => ({
      date: month,
      spend: Math.floor(Math.random() * 1000000),
    }))
  }

  function generateFakeSpendData() {
    return Array.from({ length: 5 }).map(() => {
      const invoices = Math.floor(Math.random() * 20)

      return {
        supplier: 'Food Inc.',
        invoices,
        spend: invoices * Math.floor(Math.random() * 10000),
      }
    })
  }

  return (
    <AppLayout
      state="tabbed"
      title="Insights"
      tabs={['Spend', 'Flash', 'Price alert']}
      activeTab={0}
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
        text="The value shown here might not be accurate since you have 7 invoices pending. Tap here to approve them."
        onClick={() => console.log('Clicked')}
      />

      <InsightsDateNavigator
        heading="July"
        title="£24,021.25"
        subtitle={(
          <div className="flex space-x-1">
            <Typography style="subtitle1">20%</Typography>

            <Typography style="body2">vs prior {period.id}</Typography>
          </div>
        )}
        back={() => console.log('hi')}
        forward={() => console.log('hi')}
      />

      {period.id === periods[0].id && (
        <InsightsBarChart
          data={[
            { label: 'M', spend: 25000 },
            { label: 'T', spend: 31000 },
            { label: 'W', spend: 111000 },
            { label: 'T', spend: 20000 },
            { label: 'F', spend: 40000 },
            { label: 'S', spend: 60000 },
            { label: 'S', spend: 80000 },
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

      <InsightsListGroup title="By supplier">
        {generateFakeSpendData().map((data, i) => (
          <InsightsListItem
            key={i}
            title={data.supplier}
            subtitle={`${data.invoices} invoices`}
            accent="secondary"
            onClick={() => void 0}
            data={formatMoney(data.spend)}
          />
        ))}
      </InsightsListGroup>
    </AppLayout>
  )
}
