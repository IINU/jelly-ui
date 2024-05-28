import { ComponentType } from 'react'
import { AppLayout } from '../layouts/AppLayout'

type Props = {
  state: ComponentType<{ disabledText?: string, ctaClicked: () => void }>
  disabledText?: string
  onClick: (...args: unknown[]) => void
}

export function StateShowcase({ state: State, disabledText, onClick }: Props) {
  return (
    <AppLayout state="cookbook">
      <div className="min-h-full p-4 flex justify-center items-center">
        <div className="max-w-96 w-full">
          <State ctaClicked={onClick} disabledText={disabledText}/>
        </div>
      </div>
    </AppLayout>
  )
}
