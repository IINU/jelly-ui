import { ComponentType, MouseEventHandler } from 'react'

type Props = {
  label: string
  icon: ComponentType<{ size?: string | number }>
  active: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  className?: string
}

export function CardButton({
  label,
  icon: Icon,
  active,
  className,
  onClick,
}: Props) {
  const activeClass = active ? 'border-4 border-secondary-400' : 'border-4 border-white'
  const baseClass = 'p-4 rounded text-secondary-400 flex flex-col justify-center items-center shadow font-rubik text-lg font-medium h-32 w-full bg-white space-y-2'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${activeClass} ${baseClass} ${className}`}
    >
      <Icon size={32}/>

      <span>{label}</span>
    </button>
  )
}
