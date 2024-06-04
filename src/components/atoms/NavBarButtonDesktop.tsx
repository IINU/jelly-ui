import { Typography } from './Typography'
import { ComponentType } from 'react'

type Props = {
  icon: ComponentType<{ size?: string | number }>
  text: string
  active?: boolean
  onClick?: () => void
}

export function NavBarButtonDesktop({ icon: Icon, active, onClick, text }: Props) {
  const buttonBase = 'flex justify-center items-center w-full border-b-4 h-16'

  const buttonText = active
    ? 'text-tertiary-400 border-tertiary-400'
    : 'text-primary-400 border-primary-900'

  return (
    <button onClick={onClick} className={`${buttonBase} ${buttonText}`}>
      <div className="flex items-center space-x-2">
        <Icon size={24}/>
        <Typography style="button" className="capitalize">{text}</Typography>
      </div>
    </button>
  )
}
