import { Typography } from './Typography'
import { ComponentType } from 'react'

type Props = {
  icon: ComponentType<{ size?: string | number }>
  text: string
  active?: boolean
  onClick?: () => void
}

export function NavBarButtonDesktop({ icon: Icon, active, onClick, text }: Props) {
  const buttonBase = 'jui-flex jui-justify-center jui-items-center jui-w-full jui-border-b-4 jui-h-16'

  const buttonText = active
    ? 'jui-text-tertiary-400 jui-border-tertiary-400'
    : 'jui-text-primary-400 jui-border-primary-900'

  return (
    <button onClick={onClick} className={`${buttonBase} ${buttonText}`}>
      <div className="jui-flex jui-items-center jui-space-x-2">
        <Icon size={24}/>
        <Typography style="button" className="jui-capitalize">{text}</Typography>
      </div>
    </button>
  )
}
