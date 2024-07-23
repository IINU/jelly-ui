import { MouseEventHandler, ReactNode } from 'react'

export type TypographyStyle = 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'h4' | 'h6' | 'button'

type Props = {
  style?: TypographyStyle
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  children: ReactNode
}

export function Anchor({ style = 'body1', className = '', onClick, children }: Props) {
  const styled: Record<TypographyStyle, string> = {
    subtitle1: 'jui-font-rubik jui-text-base jui-font-medium jui-leading-[1.3125rem]',
    subtitle2: 'jui-font-rubik jui-text-base jui-font-normal jui-leading-4',
    body1: 'jui-font-lato jui-text-base jui-font-normal',
    body2: 'jui-font-lato jui-text-sm jui-font-normal jui-leading-[1.125rem]',
    caption: 'jui-font-lato jui-text-sm jui-font-bold jui-leading-5',
    button: 'jui-font-rubik jui-text-sm jui-font-medium',
    h4: 'jui-font-rubik jui-text-[2rem] jui-font-medium jui-leading-8',
    h6: 'jui-font-rubik jui-text-[1.25rem] jui-font-medium',
  }

  return (
    <a
      className={`jui-text-secondary-400 ${styled[style]} ${className}`}
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
