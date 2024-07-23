import { MouseEventHandler } from 'react'

type Props = {
  active?: boolean
  src: string
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

export function ProfilePicture({ active = false, src, className, onClick }: Props) {
  const activeClass = active ? 'jui-bg-secondary-400' : 'jui-bg-white'
  const ppBase = `jui-flex jui-justify-center jui-items-center jui-w-36 jui-h-36 jui-shadow jui-rounded-full jui-p-1 jui-cursor-pointer ${activeClass}`
  const imgBase = 'jui-w-full jui-h-full jui-rounded-full jui-object-cover'

  return (
    <div
      className={`${ppBase} ${className}`}
      onClick={onClick}
    >
      <img src={src} alt="Chef" className={imgBase}/>
    </div>
  )
}
