import { MouseEventHandler } from 'react'

type Props = {
  active: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Dot({ active = false, onClick }: Props) {
  const background = active ? 'jui-bg-gray-900' : 'jui-bg-gray-400'

  return (
    <button className={`jui-w-2 jui-h-2 jui-rounded-full ${background}`} onClick={onClick}/>
  )
}
