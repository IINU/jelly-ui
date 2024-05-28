import { ReactNode } from 'react'

export type TypographyStyle = 'subtitle1' | 'body1' | 'body2' | 'caption' | 'h6' | 'button'

type Props = {
  style?: TypographyStyle
  className?: string,
  children: ReactNode
}

export function Typography({ style = 'body1', children, className }: Props) {
  const styled: Record<TypographyStyle, string> = {
    subtitle1: 'font-rubik text-base font-medium',
    body1: 'font-lato text-base font-normal',
    body2: 'font-rubik text-sm font-medium',
    caption: 'font-lato text-sm font-medium',
    button: 'font-rubik text-sm font-medium',
    h6: "font-rubik text-lg font-medium"
  }

  return (
    <p className={`${styled[style]} ${className}`}>
      {children}
    </p>
  )
}
