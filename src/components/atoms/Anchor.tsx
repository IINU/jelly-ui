import { MouseEventHandler, ReactNode } from 'react'

export type TypographyStyle = 'subtitle1' | 'body1' | 'body2' | 'caption' | 'h6'

type Props = {
  style?: TypographyStyle
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  children: ReactNode
}

export function Anchor({ style = 'body1', className, onClick, children }: Props) {
  const styled: Record<TypographyStyle, string> = {
    subtitle1: 'font-rubik text-md font-medium',
    body1: '',
    body2: 'font-rubik text-sm font-medium',
    caption: 'font-lato text-sm font-medium',
    h6: 'font-rubik text-lg font-medium',
  }

  return (
    <a
      className={`text-secondary-400 ${styled[style]} ${className}`}
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
