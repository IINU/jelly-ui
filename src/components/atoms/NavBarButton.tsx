import { Typography } from './Typography'
import { ComponentType } from 'react'

type Props = {
  icon: ComponentType<{ size?: string | number }>
  text: string
  active?: boolean
  onClick?: () => void
}

export function NavBarButton({ icon: Icon, active, onClick, text }: Props) {
  const buttonBase = 'jui-flex jui-flex-col jui-items-center jui-space-y-0.5 jui-w-full'
  const buttonText = active ? 'jui-text-primary-900' : 'jui-text-primary-600'

  const accentBarBase = 'jui-w-1/3 jui-rounded-full jui-h-1'
  const accentBarBg = active ? 'jui-bg-tertiary-400' : 'jui-bg-white'

  return (
    <button onClick={onClick} className={`${buttonBase} ${buttonText}`}>
      <Icon size={24}/>

      <Typography style="button">{text}</Typography>

      <div className={`${accentBarBase} ${accentBarBg}`}/>
    </button>
  )
}
