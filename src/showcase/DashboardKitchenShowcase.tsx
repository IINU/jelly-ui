import { AppLayout } from '../layouts/AppLayout'
import { IconBasket, IconBook, IconBuildingStore, IconTrendingUp } from '@tabler/icons-react'
import { Typography } from '../components/atoms/Typography'
import { DashboardNumberCard } from '../components/molecules/DashboardNumberCard'
import { DashboardNumberCardCompact } from '../components/molecules/DashboardNumberCardCompact'
import { DashboardSection } from '../components/molecules/DashboardSection'
import { DashboardPeriod, DashboardPeriodSelector } from '../components/molecules/DashboardPeriodSelector'
import { useState } from 'react'
import { DashboardActions } from '../components/molecules/DashboardActions'

export function DashboardKitchenShowcase() {
  const [period, setPeriod] = useState<DashboardPeriod>('week')

  return (
    <AppLayout state="title">
      <DashboardActions
        actions={[
          { title: 'Cookbook', onClick: () => console.log('hi'), icon: IconBook },
          { title: 'Stock', onClick: () => console.log('hi'), icon: IconBasket },
          { title: 'Orders', onClick: () => console.log('hi'), icon: IconBuildingStore },
        ]}
      >
        <div className="pt-4">
          <DashboardPeriodSelector
            value={period}
            onChange={setPeriod}
          />
        </div>

        <DashboardSection title="Cookbook">
          <DashboardNumberCard
            accent="secondary"
            title="Updates in cookbook"
            data="30"
          />

          <DashboardNumberCardCompact
            accent="error"
            title="Weekend Brunch"
            subtitle="70% target"
            data="55.22%"
            onClick={() => {
              console.log('hi')
            }}
          />
        </DashboardSection>

        <DashboardSection title="Stock">
          <DashboardNumberCard
            accent="secondary"
            title="Total stock value"
            data="£1,245.56"
            dataCaption="(excl. VAT)"
            bottomContent={(
              <div className="flex justify-center">
                <div className="flex items-center space-x-1">
                  <IconTrendingUp size={16} className="text-error-400"/>
                  <Typography style="caption" className="text-error-400">27%</Typography>
                  <Typography style="caption" className="text-primary-600">vs this time last week</Typography>
                </div>
              </div>
            )}
          />

          <DashboardNumberCardCompact
            title="Freezer section"
            subtitle="Tue 07 May"
            data="£2053.87"
            onClick={() => {
              console.log('hi')
            }}
          />

          {/*<DashboardAlert*/}
          {/*  title="Missing 1,000 days of sales data"*/}
          {/*  subtitle="Figures below might not be accurate, please update your sales data."*/}
          {/*  onClick={() => {*/}
          {/*    console.log('hi')*/}
          {/*  }}*/}
          {/*/>*/}
        </DashboardSection>

        <DashboardSection title="Orders">
          <DashboardNumberCard
            accent="secondary"
            title="Placed this period"
            data="6"
            dataCaption="Orders"
          />

          <DashboardNumberCardCompact
            title="Ginger Pig Ltd."
            subtitle="Tue 07 May 04:26"
            data="JJ tan"
            onClick={() => {
              console.log('hi')
            }}
          />
        </DashboardSection>
      </DashboardActions>
    </AppLayout>
  )
}
