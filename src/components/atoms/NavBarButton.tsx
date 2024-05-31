import { Typography } from './Typography'
import { ComponentType } from 'react'

type Props = {
  icon: ComponentType<{ size?: string | number }>
  text: string
  active?: boolean
  onClick?: () => void
}

export function NavBarButton({ icon: Icon, active, onClick, text }: Props) {
  const buttonBase = 'flex flex-col items-center space-y-0.5 w-full'
  const buttonText = active ? 'text-primary-900' : 'text-primary-600'

  const accentBarBase = 'w-1/3 rounded-full h-1'
  const accentBarBg = active ? 'bg-tertiary-400' : 'bg-white'

  return (
    <button onClick={onClick} className={`${buttonBase} ${buttonText}`}>
      <Icon size={24}/>

      <Typography style="button">{text}</Typography>

      <div className={`${accentBarBase} ${accentBarBg}`}/>
    </button>
  )
}
