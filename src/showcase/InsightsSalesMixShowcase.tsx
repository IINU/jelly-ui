import { AppLayout } from '../layouts/AppLayout'
import { PeriodSelector } from '../components/molecules/PeriodSelector'
import { ComponentType, useState } from 'react'
import { IconCalendarMonth, IconMenu, IconSelector } from '@tabler/icons-react'
import { InsightsDateNavigator } from '../components/molecules/InsightsDateNavigator'

import { InsightsScatterChart } from '../components/molecules/InsightsScatterChart'
import { Typography } from '../components/atoms/Typography'
import { Table } from '../components/atoms/Table'
import { DashboardNumberCard } from '../components/molecules/DashboardNumberCard'

type DashboardPeriod = {
  id: string
  label: string
  title: string
  subtitle: string
  icon: ComponentType<{ className?: string }>
}

type DashboardMenu = {
  id: number
  label: string
  title: string
  subtitle: string
  icon: ComponentType<{ className?: string }>
}

export function InsightsSalesMixShowcase() {
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

  const menus: DashboardMenu[] = [
    {
      id: 1,
      label: 'Brunch',
      title: 'Brunch',
      subtitle: 'A menu. This will have different UI in kitchen app.',
      icon: IconMenu,
    },
    {
      id: 2,
      label: 'A la carte',
      title: 'A la carte',
      subtitle: 'A menu. This will have different UI in kitchen app.',
      icon: IconMenu,
    },
    {
      id: 3,
      label: 'Desert',
      title: 'Calendar Quarter',
      subtitle: 'A menu. This will have different UI in kitchen app.',
      icon: IconMenu,
    },
  ]

  const [period, setPeriod] = useState<DashboardPeriod>(periods[0])
  const [menu, setMenu] = useState<DashboardMenu>(menus[0])

  type Dish = {
    profit: number
    quantity: number
    productName: string
  }

  function generateRandomData(numEntries: number): Dish[] {
    const products = ['Product A', 'Product B', 'Product C', 'Product D']

    const randomData: Dish[] = []

    for (let i = 0; i < numEntries; i++) {
      const randomProfit = Math.floor(Math.random() * 10000)
      const randomQuantity = Math.floor(Math.random() * 10000)
      const randomProduct = products[Math.floor(Math.random() * products.length)]

      randomData.push({
        profit: randomProfit,
        quantity: randomQuantity,
        productName: randomProduct,
      })
    }

    return randomData
  }

  const data: Dish[] = generateRandomData(40)

  const customTooltipContent = (dataPoint: Dish) => {
    return (
      <>
        <Typography style="subtitle1" className="jui-text-primary-900">
          Product: {dataPoint.productName}
        </Typography>

        <Typography style="subtitle1" className="jui-text-primary-900">
          Profit: {dataPoint.profit}
        </Typography>

        <Typography style="subtitle1" className="jui-text-primary-900">
          Quantity Sold: {dataPoint.quantity}
        </Typography>
      </>
    )
  }

  return (
    <AppLayout
      state="tabbed"
      title="Insights"
      tabs={['Spend', 'Flash', 'Price alert', 'Sales Mix']}
      activeTab={3}
      actionButton="Add Invoices"
    >
      <div className="jui-h-12 jui-bg-primary-50 jui-grid jui-grid-cols-2">
        <PeriodSelector
          periods={menus}
          value={menu}
          onChange={setMenu}
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

      <InsightsDateNavigator
        heading="July"
        title="75.2% GP"
        back={() => console.log('hi')}
        forward={() => console.log('hi')}
      />

      <div className="jui-p-4 jui-space-y-4 jui-bg-primary-50">
        <DashboardNumberCard title="Total Revenue" data="£21,340"/>
        <DashboardNumberCard title="Total Profit" data="£6,255"/>
      </div>

      <div className="jui-space-y-4">
        <div>
          <div className="jui-px-4 jui-py-2 jui-bg-primary-50">
            <Typography style="subtitle2" className="jui-text-primary-800">
              Analytics
            </Typography>
          </div>

          <InsightsScatterChart<Dish>
            items={data}
            profitExtractor={item => item.profit}
            quantityExtractor={item => item.quantity}
            tooltipContent={customTooltipContent}
          />
        </div>

        <div>
          <div className="jui-px-4 jui-bg-primary-50 jui-flex jui-justify-between">
            <div className="jui-py-2">
              <Typography style="subtitle2" className="jui-text-primary-800">
                Data
              </Typography>
            </div>

            <div className="jui-flex jui-items-center jui-space-x-1">
              <Typography style="subtitle2" className="jui-text-secondary-400">
                Qty. Sold
              </Typography>

              <IconSelector className="jui-text-secondary-400" />
            </div>
          </div>

          <div className="jui-bg-primary-50 jui-p-4">
            <Table
              columns={[
                {
                  column: {
                    title: 'Dish name',
                    className: 'jui-min-w-48',
                  },
                  row: {
                    contentExtractor: (item) => item.dishName,
                  },
                },
                {
                  column: {
                    title: 'Qty. Sold',
                    className: 'jui-min-w-24',
                  },
                  row: {
                    contentExtractor: (item) => item.qtySold.toLocaleString(),
                    textAlign: 'right',
                  },
                },
                {
                  column: {
                    title: 'GP %',
                    className: 'jui-min-w-24',
                  },
                  row: {
                    contentExtractor: (item) => `${(item.gp * 100).toFixed(1)}%`,
                    textAlign: 'right',
                  },
                },
                {
                  column: {
                    title: 'Total gross profit',
                    className: 'jui-min-w-40',
                  },
                  row: {
                    contentExtractor: (item) => {
                      return (item.totalGrossProfit / 100).toLocaleString(
                        undefined,
                        { currency: 'GBP', style: 'currency' },
                      )
                    },
                    textAlign: 'right',
                  },
                },
              ]}
              rows={[
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
                { dishName: 'Spaghetti Carbonara', qtySold: 20, gp: 0.812, totalGrossProfit: 25775181 },
              ]}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
