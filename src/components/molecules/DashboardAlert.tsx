import { Typography } from '../atoms/Typography'
import { IconAlertTriangle, IconChevronRight } from '@tabler/icons-react'
import { ComponentType, ReactNode } from 'react'

type Props = {
  title: ReactNode
  subtitle?: string
  onClick: () => void
  icon?: ComponentType
}

export function DashboardAlert({
  title,
  subtitle,
  onClick,
  icon: Icon = IconAlertTriangle
}: Props) {
  const containerPadding = 'jui-py-4 jui-pl-3 jui-pr-2'
  const containerBase = `jui-bg-white jui-flex jui-justify-between jui-w-full jui-rounded-lg jui-shadow-low jui-space-x-2 jui-cursor-pointer`

  return (
    <div
      className={`${containerBase} ${containerPadding}`}
      onClick={onClick}
    >
      <div className="jui-flex jui-items-center">
        <Icon/>
      </div>

      <div className="jui-flex jui-items-center jui-flex-1">
        <div className="jui-flex jui-flex-col jui-flex-1 jui-justify-center jui-text-left">
          <Typography style="subtitle1" className="jui-text-primary-900">
            {title}
          </Typography>

          <Typography style="subtitle2" className="jui-text-primary-400">
            {subtitle}
          </Typography>
        </div>
      </div>

      <div className="jui-flex jui-items-center jui-space-x-1">
        <IconChevronRight className="jui-text-primary-600"/>
      </div>
    </div>
  )
}
