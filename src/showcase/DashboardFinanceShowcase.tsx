import { AppLayout } from '../layouts/AppLayout'
import { DashboardNumberCard } from '../components/molecules/DashboardNumberCard'
import { DashboardSection } from '../components/molecules/DashboardSection'
import { DashboardPeriod, DashboardPeriodSelector } from '../components/molecules/DashboardPeriodSelector'
import { useState } from 'react'
import { DashboardAlert } from '../components/molecules/DashboardAlert'
import { DashboardPieChart } from '../components/molecules/DashboardPieChart'
import { DashboardTrendingStack } from '../components/molecules/DashboardTrendingStack'

export function DashboardFinanceShowcase() {
  const [period, setPeriod] = useState<DashboardPeriod>('week')

  return (
    <AppLayout state="cookbook">
      <div className="pt-4">
        <DashboardPeriodSelector
          value={period}
          onChange={setPeriod}
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
          title="Missing 1,000 days of sales data"
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

        <DashboardTrendingStack
          title="Largest Price Changes"
          trendingItems={[
            {
              title: 'Blueberries 500g',
              subtitle: 'Foods LTD.',
              value: '13.45%',
              trending: 'up',
              onClick: () => console.log('hi'),
            },
            {
              title: 'Salted butter 250g',
              subtitle: 'Shop Corp Ltd.',
              value: '10.46%',
              trending: 'down',
              onClick: () => console.log('hi'),
            },
          ]}
        />
      </DashboardSection>
    </AppLayout>
  )
}
