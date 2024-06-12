import { AppLayout } from '../layouts/AppLayout'
import { DashboardNumberCard } from '../components/molecules/DashboardNumberCard'
import { DashboardSection } from '../components/molecules/DashboardSection'
import { DashboardPeriod, DashboardPeriodSelector } from '../components/molecules/DashboardPeriodSelector'
import { useState } from 'react'
import { DashboardAlert } from '../components/molecules/DashboardAlert'
import { DashboardPieChart } from '../components/molecules/DashboardPieChart'
import { DashboardActions } from '../components/molecules/DashboardActions'
import { IconReceipt, IconTrendingUp } from '@tabler/icons-react'

export function DashboardFinanceShowcase() {
  const [period, setPeriod] = useState<DashboardPeriod>('week')

  return (
    <AppLayout state="title">
      <DashboardActions
        actions={[
          { title: 'Invoices', onClick: () => console.log('hi'), icon: IconReceipt },
          { title: 'Insights', onClick: () => console.log('hi'), icon: IconTrendingUp },
        ]}
      >
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
      </DashboardActions>
    </AppLayout>
  )
}
