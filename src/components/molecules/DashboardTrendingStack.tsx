import { Typography } from '../atoms/Typography'
import { IconChevronRight, IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'
import { accentToText } from '../../utils/accent'

export type DashboardPriceChange = {
  product: string
  supplier: string
  value: string
  trending: 'up' | 'down'
  onClick: () => void
}

type Props = {
  title: string
  priceChanges: DashboardPriceChange[]
}

export function DashboardTrendingStack({ title, priceChanges }: Props) {
  return (
    <div className="bg-white w-full rounded-lg shadow-low text-center">
      <div className="pt-6 mb-2">
        <Typography style="subtitle1" className="text-primary-800">
          {title}
        </Typography>
      </div>

      {priceChanges.map(({ product, supplier, value, trending, onClick }, index) => (
        <div
          key={index}
          className="flex justify-between p-4 w-full cursor-pointer"
          onClick={onClick}
        >
          <div className="flex items-center flex-1">
            <div className="flex flex-col flex-1 justify-center text-left">
              <Typography style="subtitle1" className="text-primary-800">
                {product}
              </Typography>

              <Typography style="subtitle2" className="text-primary-600">
                {supplier}
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
