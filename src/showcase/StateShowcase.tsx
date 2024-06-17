import { ComponentType } from 'react'
import { AppLayout } from '../layouts/AppLayout'

type Props = {
  state: ComponentType<{ disabledText?: string, ctaClicked: () => void }>
  disabledText?: string
  layoutState?: 'homescreen' | 'tabbed' | 'title'
  onClick: (...args: unknown[]) => void
}

export function StateShowcase({ state: State, disabledText, onClick, layoutState = 'tabbed' }: Props) {
  return (
    <AppLayout state={layoutState}>
      <div className="min-h-full p-4 flex justify-center">
        <div className="max-w-96 w-full">
          <State ctaClicked={onClick} disabledText={disabledText}/>
        </div>
      </div>
    </AppLayout>
  )
}
