import { ComponentType } from 'react'
import { Typography } from '../atoms/Typography'

type Props = {
  title: string
  onClick: () => void
  icon: ComponentType
}

export function DashboardNavItem({ title, onClick, icon: Icon }: Props) {
  return (
    <button
      className="jui-bg-white jui-flex jui-flex-col jui-items-center jui-justify-center jui-space-y-1 jui-w-full jui-h-14 jui-border-r jui-border-primary-100 last:jui-border-none"
      onClick={onClick}
    >
      <Icon/>
      <Typography style="button">{title}</Typography>
    </button>
  )
}
