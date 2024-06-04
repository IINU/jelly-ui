import { ReactNode } from 'react'

export type TypographyStyle = 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'h4' | 'h6' | 'button'

type Props = {
  style?: TypographyStyle
  className?: string,
  children: ReactNode
}

export function Typography({ style = 'body1', children, className }: Props) {
  const styled: Record<TypographyStyle, string> = {
    subtitle1: 'font-rubik text-base font-medium leading-5',
    subtitle2: 'font-rubik text-base font-normal',
    body1: 'font-lato text-base font-normal',
    body2: 'font-lato text-sm font-normal',
    caption: 'font-lato text-sm font-bold leading-4',
    button: 'font-rubik text-sm font-medium',
    h4: 'font-rubik text-[2rem] font-medium leading-8',
    h6: 'font-rubik text-[1.25rem] font-medium',
  }

  return (
    <p className={`${styled[style]} ${className}`}>
      {children}
    </p>
  )
}
