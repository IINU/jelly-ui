type Props = {
  active?: boolean
  src: string
  className?: string
  onClick?: (url: string) => void
}

export function ProfilePicture({ active = false, src, className, onClick }: Props) {
  const activeClass = active ? 'bg-secondary-400' : 'bg-white'
  const ppBase = `flex justify-center items-center w-36 h-36 shadow rounded-full p-1 ${activeClass}`
  const imgBase = 'w-full h-full rounded-full object-cover'

  return (
    <button
      className={`${ppBase} ${className}`}
      onClick={() => onClick?.(src)}
    >
      <img src={src} alt="Chef" className={imgBase}/>
    </button>
  )
}
