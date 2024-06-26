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
      return 'Bravo! You’ve mastered Jelly!'
    }

    if (pct >= 0.75) {
      return 'Almost done! It’s looking delicious!'
    }

    if (pct >= 0.5) {
      return 'Halfway there! Keep the heat up!'
    }

    return 'Complete onboarding to earn the Jelly trophy!'
  }

  return (
    <div className="w-full max-h-[calc(100vh-12rem)] min-h-48 rounded shadow-medium bg-white flex flex-col">
      <div className="py-8 px-4 space-y-4">
        <div className="text-center">
          <Typography style="body1" className="text-primary-800">
            {Math.round(percentage * 100)}%
          </Typography>

          <Typography style="caption" className="text-primary-800">
            {getText(percentage)}
          </Typography>
        </div>

        <ProgressBar percentage={percentage}/>
      </div>

      <div className="overflow-y-scroll flex-1">
        {steps.map((step, index) => (
          <ChecklistStep
            key={getStepKey(step, index)}
            text={step.text}
            completed={step.completed}
            onClick={() => onClick(step)}
          />
        ))}
      </div>
    </div>
  )
}
