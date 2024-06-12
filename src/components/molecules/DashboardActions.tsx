import { ComponentType, ReactNode } from 'react'
import { Typography } from '../atoms/Typography'

type Action = {
  title: string
  icon: ComponentType
  onClick: () => void
}

type Props = {
  actions: Action[]
  children: ReactNode
}

export function DashboardActions({ actions, children }: Props) {
  return (
    <div className="h-full flex flex-col overflow-auto">
      <div className="bg-white shadow-medium w-full py-2 flex z-20">
        {actions.map(({ title, onClick, icon: Icon }, index) => (
          <button
            key={index}
            className="bg-white flex flex-col items-center justify-center space-y-1 w-full h-14 border-r border-primary-100 last:border-none"
            onClick={onClick}
          >
            <Icon/>
            <Typography style="button">{title}</Typography>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-scroll">
        {children}
      </div>
    </div>
  )
}
