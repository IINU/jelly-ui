import { Typography } from '../atoms/Typography'
import { accentToText } from '../../utils/accent'
import { IconChevronRight } from '@tabler/icons-react'

type Props = {
  accent?: 'error' | 'success' | 'tertiary' | 'secondary'
  title: string
  subtitle?: string
  data: string
  onClick?: () => void
}

export function DashboardNumberCardCompact({ accent, title, subtitle, data, onClick }: Props) {
  function getPadding() {
    if (!onClick) {
      return 'py-4 px-3'
    }

    return 'py-4 pl-3 pr-2'
  }

  const containerBase = `bg-white flex justify-between w-full rounded-lg shadow-low space-x-2`

  return (
    <div
      className={`${containerBase} ${getPadding()} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center flex-1">
        <div className="flex flex-col flex-1 justify-center text-left">
          <Typography style="subtitle1" className="text-primary-900">
            {title}
          </Typography>

          <Typography style="body2" className="text-primary-600">
            {subtitle}
          </Typography>
        </div>
      </div>

      <div className="flex items-center space-x-1">
        {data && (
          <Typography
            style="h6"
            className={accentToText(accent, 'text-primary-800')}
          >
            {data}
          </Typography>
        )}

        {onClick && <IconChevronRight className="text-primary-600"/>}
      </div>
    </div>
  )
}
