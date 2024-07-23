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
      return 'jui-py-4 jui-px-3'
    }

    return 'jui-py-4 jui-pl-3 jui-pr-2'
  }

  const containerBase = `jui-bg-white jui-flex jui-justify-between jui-w-full jui-rounded-lg jui-shadow-low jui-space-x-2`

  return (
    <div
      className={`${containerBase} ${getPadding()} ${onClick ? 'jui-cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="jui-flex jui-items-center jui-flex-1">
        <div className="jui-flex jui-flex-col jui-flex-1 jui-justify-center jui-text-left">
          <Typography style="subtitle1" className="jui-text-primary-900">
            {title}
          </Typography>

          <Typography style="body2" className="jui-text-primary-600">
            {subtitle}
          </Typography>
        </div>
      </div>

      <div className="jui-flex jui-items-center jui-space-x-1">
        {data && (
          <Typography
            style="h6"
            className={accentToText(accent, 'jui-text-primary-800')}
          >
            {data}
          </Typography>
        )}

        {onClick && <IconChevronRight className="jui-text-primary-600"/>}
      </div>
    </div>
  )
}
