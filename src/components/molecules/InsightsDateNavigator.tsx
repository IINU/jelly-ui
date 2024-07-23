import { Button } from '../atoms/Button'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { Typography } from '../atoms/Typography'
import { ReactNode } from 'react'

type Props = {
  heading: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  back: () => void
  forward: () => void
  backDisabled?: boolean
  forwardDisabled?: boolean
}

export function InsightsDateNavigator({ heading, title, subtitle, back, forward, backDisabled, forwardDisabled }: Props) {
  return (
    <div className="jui-w-full jui-flex jui-space-x-3 jui-items-center jui-bg-white jui-p-3 jui-border-b jui-border-primary-200">
      <Button
        style="secondary"
        disabled={backDisabled}
        onClick={back}
        icon={IconChevronLeft}
      />

      <div className="jui-flex-1 jui-flex jui-flex-col jui-items-center jui-space-y-1 jui-text-primary-900">
        <Typography style="body2">{heading}</Typography>
        <Typography style="h4">{title}</Typography>
        {subtitle}
      </div>

      <Button
        style="secondary"
        disabled={forwardDisabled}
        onClick={forward}
        icon={IconChevronRight}
      />
    </div>
  )
}
