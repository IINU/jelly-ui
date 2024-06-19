import { Button } from '../atoms/Button'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { Typography } from '../atoms/Typography'
import { ReactNode } from 'react'

type Props = {
  heading: ReactNode
  title: ReactNode
  subtitle: ReactNode
  back: () => void
  forward: () => void
  backDisabled?: boolean
  forwardDisabled?: boolean
}

export function InsightsDateNavigator({ heading, title, subtitle, back, forward, backDisabled, forwardDisabled }: Props) {
  return (
    <div className="w-full flex space-x-3 items-center bg-white p-3 border-b border-primary-200">
      <Button
        style="secondary"
        disabled={backDisabled}
        onClick={back}
        icon={IconChevronLeft}
      />

      <div className="flex-1 flex flex-col items-center space-y-1 text-primary-900">
        <Typography style="body2">{heading}</Typography>
        <Typography style="h4">{title}</Typography>
        <Typography style="subtitle2">{subtitle}</Typography>
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
