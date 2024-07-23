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
      <div className="jui-min-h-full jui-p-4 jui-flex jui-justify-center">
        <div className="jui-max-w-96 jui-w-full">
          <State ctaClicked={onClick} disabledText={disabledText}/>
        </div>
      </div>
    </AppLayout>
  )
}
