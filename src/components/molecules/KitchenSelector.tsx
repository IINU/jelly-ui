import { IconSelector } from '@tabler/icons-react'

import { Typography } from '../atoms/Typography'

export type KitchenSelectorProps = {
  onClick: () => void
  title: string
  subtitle: string
}

export function KitchenSelector({
  onClick,
  title,
  subtitle,
}: KitchenSelectorProps) {
  return (
    <button
      type="button"
      className="jui-flex jui-items-center jui-px-4 jui-py-2 jui-space-x-1 jui-cursor-pointer jui-text-left jui-min-w-0"
      onClick={onClick}
    >
      <IconSelector className="jui-text-primary-900 jui-shrink-0" />

      <div className="jui-min-w-0">
        <Typography style="subtitle1" className="jui-text-primary-900">
          {title}
        </Typography>

        <Typography
          style="subtitle1"
          className="jui-text-secondary-400 jui-line-clamp-1"
        >
          {subtitle}
        </Typography>
      </div>
    </button>
  )
}
