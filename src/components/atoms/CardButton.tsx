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
  const activeClass = active ? 'jui-border-4 jui-border-secondary-400' : 'jui-border-4 jui-border-white'
  const baseClass = 'jui-p-4 jui-rounded jui-text-secondary-400 jui-flex jui-flex-col jui-justify-center jui-items-center jui-shadow jui-font-rubik jui-text-lg jui-font-medium jui-min-h-32 jui-w-full jui-bg-white jui-space-y-2'

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
