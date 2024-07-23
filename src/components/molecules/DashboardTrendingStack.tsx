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
    <div className="jui-bg-white jui-w-full jui-rounded-lg jui-shadow-low jui-text-center">
      <div className="jui-pt-6 jui-mb-2">
        <Typography style="subtitle1" className="jui-text-primary-800">
          {title}
        </Typography>
      </div>

      {trendingItems.map(({ title, subtitle, value, trending, onClick }, index) => (
        <div
          key={index}
          className="jui-flex jui-justify-between jui-p-4 jui-w-full jui-cursor-pointer"
          onClick={onClick}
        >
          <div className="jui-flex jui-items-center jui-flex-1">
            <div className="jui-flex jui-flex-col jui-flex-1 jui-justify-center jui-text-left">
              <Typography style="subtitle1" className="jui-text-primary-800">
                {title}
              </Typography>

              <Typography style="subtitle2" className="jui-text-primary-600">
                {subtitle}
              </Typography>
            </div>
          </div>

          <div className="jui-flex jui-items-center jui-space-x-1">
            <div className="jui-flex jui-items-center jui-flex-1">
              <div
                className={`jui-flex jui-flex-col jui-flex-1 jui-justify-center jui-items-center jui-text-left ${accentToText(trending === 'up' ? 'error' : 'success')}`}
              >
                {trending === 'up' ? <IconTrendingUp/> : <IconTrendingDown/>}

                <Typography style="h6">{value}</Typography>
              </div>
            </div>

            <IconChevronRight className="jui-text-primary-400"/>
          </div>
        </div>
      ))}
    </div>
  )
}
