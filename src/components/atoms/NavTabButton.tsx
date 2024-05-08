import { IconProps, Icon } from '@tabler/icons-react'
import { cn } from '../../utils/utils'
import { Typography } from './Typography'

export const NavTabButton = ({
  NavIcon,
  selected,
  setSelected,
  text,
  type,
}: {
  NavIcon: React.ForwardRefExoticComponent<
    Omit<IconProps, 'ref'> & React.RefAttributes<Icon>
  > | null;
  text: string;
  selected: boolean;
  setSelected: () => void;
  type: 'desktop' | 'mobile';
}) => {
  return type === 'desktop' ? (
    <div
      className={cn(
        selected
          ? 'border-opacity-100 text-tertiary-400 border-tertiary-400'
          : 'border-opacity-0 text-gray-400 border-gray-400',
        'flex items-center h-full capitalize cursor-pointer border-b-4 px-2 transition-all hover:border-opacity-100 space-x-2',
      )}
      onClick={() => {
        setSelected()
      }}
    >
      {NavIcon && <NavIcon size={24}/>}
      <Typography style="subtitle1">{text}</Typography>
    </div>
  ) : (
    <div
      className={cn(
        selected
          ? 'border-opacity-100 text-tertiary-400 border-tertiary-400'
          : 'border-opacity-0 text-gray-400 border-gray-400',
        'flex items-center h-full capitalize cursor-pointer border-b-4 px-2 transition-all hover:border-opacity-100 space-x-2',
      )}
      onClick={() => {
        setSelected()
      }}
    >
      {NavIcon && <NavIcon size={24}/>}
      <Typography style="subtitle1">{text}</Typography>
    </div>
  )
}
