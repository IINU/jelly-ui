import { cn } from '../../utils/utils'
import { Typography } from './Typography'
import { ComponentType } from 'react'

type Props = {
  icon: ComponentType<{ size?: string | number }>
  text: string
  selected: boolean
  onClick: () => void
  type: 'desktop' | 'mobile'
}

export const NavTabButton = ({
  icon: NavIcon,
  selected,
  onClick,
  text,
  type,
}: Props) => {
  if (type === 'desktop') {
    return (
      <div
        className={cn(
          selected
            ? 'border-opacity-100 text-tertiary-400 border-tertiary-400'
            : 'border-opacity-0 text-gray-400 border-gray-400',
          'flex items-center h-full capitalize cursor-pointer border-b-4 px-2 transition-all hover:border-opacity-100 space-x-2',
        )}
        onClick={() => onClick()}
      >
        <NavIcon size={24}/>
        <Typography style="subtitle1">{text}</Typography>
      </div>
    )
  }

  return (
    <div
      className={cn(
        selected
          ? 'border-opacity-100 text-tertiary-400 border-tertiary-400'
          : 'border-opacity-0 text-gray-400 border-gray-400',
        'flex flex-col justify-center items-center h-full capitalize cursor-pointer border-b-4 px-2 transition-all hover:border-opacity-100',
      )}
      onClick={() => onClick()}
    >
      <NavIcon size={24}/>
      <Typography style="subtitle1">{text}</Typography>
    </div>
  )
}
