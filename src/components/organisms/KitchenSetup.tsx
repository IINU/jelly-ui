import { ChecklistStep } from '../molecules/ChecklistStep'
import { ProgressBar } from '../atoms/ProgressBar'
import { Typography } from '../atoms/Typography'
import { useMemo } from 'react'

type Step = {
  text: string
  completed: boolean
}

type Props<T> = {
  steps: T[]
  onClick: (step: T) => void
  getStepKey?: (step: T, index: number) => string | number
}

export function KitchenSetup<T extends Step>(
  { steps, onClick, getStepKey }: Props<T>,
) {
  const percentage = useMemo(() => {
    return steps.filter(s => s.completed).length / steps.length
  }, [steps])

  if (!getStepKey) {
    getStepKey = (_: T, i: number) => i
  }

  function getText(pct: number) {
    if (pct === 1) {
      return 'Well done, you’ve mastered Jelly!'
    }

    if (pct >= 0.8) {
      return 'Almost there! 🥳'
    }

    return 'Complete onboarding to earn the Jelly trophy!'
  }

  return (
    <div className="w-full rounded shadow-medium bg-white">
      <div className="py-8 px-4 space-y-4">
        <div className="text-center">
          <Typography style="body1" className="text-primary-800">
            {Math.round(percentage * 100)}%
          </Typography>

          <Typography style="body2" className="text-primary-800">
            {getText(percentage)}
          </Typography>
        </div>

        {percentage !== 1 && <ProgressBar percentage={percentage}/>}
      </div>

      {steps.map((step, index) => (
        <ChecklistStep
          key={getStepKey(step, index)}
          text={step.text}
          completed={step.completed}
          onClick={() => onClick(step)}
        />
      ))}
    </div>
  )
}
