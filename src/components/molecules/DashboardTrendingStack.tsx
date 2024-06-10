import { Typography } from '../atoms/Typography'
import { IconChevronRight, IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'
import { accentToText } from '../../utils/accent'

export type DashboardTrendingItem = {
  title: string
  subtitle: string
  value: string
  trending: 'up' | 'down'
  onClick: () => void
}

type Props = {
  title: string
  trendingItems: DashboardTrendingItem[]
}

export function DashboardTrendingStack({ title, trendingItems }: Props) {
  return (
    <div className="bg-white w-full rounded-lg shadow-low text-center">
      <div className="pt-6 mb-2">
        <Typography style="subtitle1" className="text-primary-800">
          {title}
        </Typography>
      </div>

      {trendingItems.map(({ title, subtitle, value, trending, onClick }, index) => (
        <div
          key={index}
          className="flex justify-between p-4 w-full cursor-pointer"
          onClick={onClick}
        >
          <div className="flex items-center flex-1">
            <div className="flex flex-col flex-1 justify-center text-left">
              <Typography style="subtitle1" className="text-primary-800">
                {title}
              </Typography>

              <Typography style="subtitle2" className="text-primary-600">
                {subtitle}
              </Typography>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <div className="flex items-center flex-1">
              <div
                className={`flex flex-col flex-1 justify-center items-center text-left ${accentToText(trending === 'up' ? 'error' : 'success')}`}
              >
                {trending === 'up' ? <IconTrendingUp/> : <IconTrendingDown/>}

                <Typography style="h6">{value}</Typography>
              </div>
            </div>

            <IconChevronRight className="text-primary-400"/>
          </div>
        </div>
      ))}
    </div>
  )
}
