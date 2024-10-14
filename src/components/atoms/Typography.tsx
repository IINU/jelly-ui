import { ReactNode } from 'react'

export type TypographyStyle = 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'h4' | 'h6' | 'button'

type Props = {
  style?: TypographyStyle
  className?: string,
  children: ReactNode
}

export function Typography({ style = 'body1', children, className = '' }: Props) {
  const styled: Record<TypographyStyle, string> = {
    subtitle1: 'jui-font-rubik jui-text-base jui-font-medium jui-leading-[1.3125rem]',
    subtitle2: 'jui-font-rubik jui-text-base jui-font-normal jui-leading-[1.1875rem]',
    body1: 'jui-font-lato jui-text-base jui-font-normal',
    body2: 'jui-font-lato jui-text-sm jui-font-normal jui-leading-[1.125rem]',
    caption: 'jui-font-lato jui-text-sm jui-font-bold jui-leading-5',
    button: 'jui-font-rubik jui-text-sm jui-font-medium jui-leading-[1.0625rem]',
    h4: 'jui-font-rubik jui-text-[2rem] jui-font-medium jui-leading-8',
    h6: 'jui-font-rubik jui-text-[1.25rem] jui-font-medium',
  }

  return (
    <p className={`${styled[style]} ${className}`}>
      {children}
    </p>
  )
}
