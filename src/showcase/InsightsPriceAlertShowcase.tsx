import { AppLayout } from '../layouts/AppLayout'
import { PeriodSelector } from '../components/molecules/PeriodSelector'
import { ComponentType, useState } from 'react'
import { IconCalendarMonth, IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'
import {
  eachDayOfInterval,
  format,
  subDays,
} from 'date-fns'
import { InsightsListGroup } from '../components/molecules/InsightsListGroup'
import { InsightsListItem } from '../components/molecules/InsightsListItem'

type DashboardPeriod = {
  id: string
  label: string
  title: string
  subtitle: string
  icon: ComponentType<{ className?: string }>
}

export function InsightsPriceAlertShowcase() {
  const periods: DashboardPeriod[] = [
    {
      id: 'day',
      label: 'By Calendar Day',
      title: 'Calendar Day',
      subtitle: 'Daily price change.',
      icon: IconCalendarMonth,
    },
    {
      id: 'week',
      label: 'By Calendar Week',
      title: 'Calendar Week',
      subtitle: 'Weekly price change.',
      icon: IconCalendarMonth,
    },
    {
      id: 'month',
      label: 'By Calendar Month',
      title: 'Calendar Month',
      subtitle: 'Monthly price change.',
      icon: IconCalendarMonth,
    },
  ]

  const suppliers: DashboardPeriod[] = [
    {
      id: '1',
      label: 'Food Inc.',
      title: 'Food Inc.',
      subtitle: 'This is storybook only. Kitchen UI has a component for supplier selection.',
      icon: IconCalendarMonth,
    },
    {
      id: '2',
      label: 'Jacks Dairy',
      title: 'Jacks Dairy',
      subtitle: 'This is storybook only. Kitchen UI has a component for supplier selection.',
      icon: IconCalendarMonth,
    },
    {
      id: '3',
      label: 'JJs Yard',
      title: 'JJs Yard',
      subtitle: 'This is storybook only. Kitchen UI has a component for supplier selection.',
      icon: IconCalendarMonth,
    },
  ]

  const [period, setPeriod] = useState<DashboardPeriod>(periods[0])
  const [supplier, setSupplier] = useState<DashboardPeriod>(suppliers[0])

  function generateFakePriceChangeData() {
    const days = eachDayOfInterval({ start: subDays(new Date(), 6), end: new Date() })

    return days.reverse().map(day => ({
      date: day,
      changes: Array.from({ length: 10 }).map(() => ({
        supplier: supplier.label,
        product: 'Cheese, Cheddar',
        pct: (Math.random() - 0.5),
      })),
    }))
  }

  return (
    <AppLayout
      state="tabbed"
      title="Insights"
      tabs={['Spend', 'Flash', 'Price alert']}
      activeTab={2}
      actionButton="Add Invoices"
    >
      <div className="h-12 bg-primary-50 grid grid-cols-2">
        <PeriodSelector
          periods={suppliers}
          value={supplier}
          onChange={setSupplier}
          labelExtractor={p => p.label}
          titleExtractor={p => p.title}
          subtitleExtractor={p => p.subtitle}
          iconExtractor={p => p.icon}
        />

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

      {generateFakePriceChangeData().map(data => (
        <InsightsListGroup key={data.date.toString()} title={format(data.date, 'd MMMM')}>
          {data.changes.map((change, i) => (
            <InsightsListItem
              key={i}
              title={change.product}
              subtitle={change.supplier}
              accent={change.pct > 0 ? 'error' : 'success'}
              onClick={() => void 0}
              icon={change.pct > 0 ? IconTrendingUp : IconTrendingDown}
              data={`${(Math.abs(change.pct) * 100).toFixed(2)}%`}
            />
          ))}
        </InsightsListGroup>
      ))}
    </AppLayout>
  )
}
