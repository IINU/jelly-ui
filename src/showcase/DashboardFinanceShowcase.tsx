import { AppLayout } from '../layouts/AppLayout'
import { DashboardNumberCard } from '../components/molecules/DashboardNumberCard'
import { DashboardSection } from '../components/molecules/DashboardSection'
import { PeriodSelector } from '../components/molecules/PeriodSelector'
import { ComponentType, useState } from 'react'
import { DashboardAlert } from '../components/molecules/DashboardAlert'
import { DashboardPieChart } from '../components/molecules/DashboardPieChart'
import { DashboardNav } from '../components/molecules/DashboardNav'
import { IconCalendarMonth, IconReceipt, IconTrendingUp } from '@tabler/icons-react'
import { DashboardNavItem } from '../components/molecules/DashboardNavItem'
import { Portal } from '../layouts/Portal'

type DashboardPeriod = {
  label: string
  title: string
  subtitle: string
  icon: ComponentType<{ className?: string }>
}

export function DashboardFinanceShowcase() {
  const periods: DashboardPeriod[] = [
    {
      label: 'This Calendar Week',
      title: 'Calendar Week',
      subtitle: 'From Monday to Sunday',
      icon: IconCalendarMonth,
    },
    {
      label: 'This Calendar Month',
      title: 'Calendar Month',
      subtitle: 'From the 1st to the last day of each month',
      icon: IconCalendarMonth,
    },
    {
      label: 'This Calendar Quarter',
      title: 'Calendar Quarter',
      subtitle: 'From the 1st of Month 1 to the last day of Month 3',
      icon: IconCalendarMonth,
    },
  ]

  const [period, setPeriod] = useState<DashboardPeriod>(periods[0])

  return (
    <AppLayout state="title" actionButton="Add Invoices">
      <Portal id="second-nav">
        <DashboardNav>
          <DashboardNavItem title="Invoices" onClick={() => console.log('hi')} icon={IconReceipt}/>
          <DashboardNavItem title="Insights" onClick={() => console.log('hi')} icon={IconTrendingUp}/>
        </DashboardNav>
      </Portal>

      <div className="pt-4">
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

      <DashboardSection title="Invoices">
        <DashboardNumberCard
          accent="error"
          title="Needs Attention"
          data="6"
          dataCaption="Invoices"
        />
      </DashboardSection>

      <DashboardSection title="Insights">
        <DashboardAlert
          title="Large Price Changes"
          subtitle="See all the price changes from your suppliers"
          onClick={() => console.log('hi')}
          icon={IconTrendingUp}
        />

        <DashboardAlert
          title={(
            <span className="space-x-1">
                <span>Missing</span>
                <span className="text-error-400">1,000</span>
                <span>days of sales data</span>
              </span>
          )}
          subtitle="Figures below might not be accurate, please update your sales data."
          onClick={() => {
            console.log('hi')
          }}
        />

        <DashboardPieChart
          title="Sales (excl. VAT)"
          data="£1,234.56"
          dataPoint1={{ value: 20, text: 'Spend' }}
          dataPoint2={{ value: 80, text: 'GP' }}
        />
      </DashboardSection>
    </AppLayout>
  )
}
