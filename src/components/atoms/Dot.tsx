import { MouseEventHandler } from 'react'

type Props = {
  active: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Dot({ active = false, onClick }: Props) {
  const background = active ? 'bg-gray-900' : 'bg-gray-400'

  return (
    <button className={`w-2 h-2 rounded-full ${background}`} onClick={onClick}/>
  )
}
