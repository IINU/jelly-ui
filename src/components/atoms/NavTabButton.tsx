import { cn } from '../../utils/utils'
import { Typography } from './Typography'
import { ComponentType } from 'react'

type Props = {
  icon: ComponentType<{ size?: string | number }>
  text: string
  selected: boolean
  onClick: () => void
}

export const NavTabButton = ({
  icon: NavIcon,
  selected,
  onClick,
  text,
}: Props) => {
  return (
    <div
      className={cn(
        selected ? 'text-primary-900' : 'text-primary-600',
        'flex flex-col justify-center items-center',
        'h-full cursor-pointer px-2 transition-all',
      )}
      onClick={() => onClick()}
    >
      <NavIcon size={24}/>

      <Typography style="button">{text}</Typography>

      <div className={cn(
        selected ? 'bg-tertiary-400' : 'bg-white',
        'w-3/4 rounded-full h-1 transition-all'
      )}/>
    </div>
  )
}
