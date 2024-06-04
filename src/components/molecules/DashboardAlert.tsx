import { Typography } from '../atoms/Typography'
import { IconAlertTriangle, IconChevronRight } from '@tabler/icons-react'

type Props = {
  title: string
  subtitle?: string
  onClick: () => void
}

export function DashboardAlert({ title, subtitle, onClick }: Props) {
  const containerPadding = 'py-4 pl-3 pr-2'
  const containerBase = `bg-white flex justify-between w-full rounded-lg shadow-low space-x-2 cursor-pointer`

  return (
    <div
      className={`${containerBase} ${containerPadding}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <IconAlertTriangle/>
      </div>

      <div className="flex items-center flex-1">
        <div className="flex flex-col flex-1 justify-center text-left">
          <Typography style="subtitle1" className="text-primary-900">
            {title}
          </Typography>

          <Typography style="subtitle2" className="text-primary-400">
            {subtitle}
          </Typography>
        </div>
      </div>

      <div className="flex items-center space-x-1">
        <IconChevronRight className="text-primary-600"/>
      </div>
    </div>
  )
}
