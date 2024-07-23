import { AppLayout } from '../layouts/AppLayout'
import {
  IconBasket,
  IconBook2,
  IconBuildingStore,
  IconCalendarMonth,
  IconTrendingUp,
} from '@tabler/icons-react'
import { Typography } from '../components/atoms/Typography'
import { DashboardNumberCard } from '../components/molecules/DashboardNumberCard'
import { DashboardNumberCardCompact } from '../components/molecules/DashboardNumberCardCompact'
import { DashboardSection } from '../components/molecules/DashboardSection'
import { PeriodSelector } from '../components/molecules/PeriodSelector'
import { ComponentType, useState } from 'react'
import { DashboardNav } from '../components/molecules/DashboardNav'
import { DashboardNavItem } from '../components/molecules/DashboardNavItem'
import { Portal } from '../layouts/Portal'

type DashboardPeriod = {
  label: string
  title: string
  subtitle: string
  icon: ComponentType<{ className?: string }>
}

export function DashboardKitchenShowcase() {
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
    <AppLayout state="title" actionButton="Place Order">
      <Portal id="second-nav">
        <DashboardNav>
          <DashboardNavItem title="Cookbook" onClick={() => console.log('hi')} icon={IconBook2}/>
          <DashboardNavItem title="Stock" onClick={() => console.log('hi')} icon={IconBasket}/>
          <DashboardNavItem title="Orders" onClick={() => console.log('hi')} icon={IconBuildingStore}/>
        </DashboardNav>
      </Portal>

      <div className="jui-pt-4">
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
            <div className="jui-flex jui-justify-center">
              <div className="jui-flex jui-items-center jui-space-x-1">
                <IconTrendingUp size={16} className="jui-text-error-400"/>

                <Typography style="caption" className="jui-text-error-400">
                  27%
                </Typography>

                <Typography style="caption" className="jui-text-primary-600">
                  vs this time last week
                </Typography>
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
    </AppLayout>
  )
}
