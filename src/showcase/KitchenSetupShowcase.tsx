import { KitchenSetup } from '../components/organisms/KitchenSetup'
import { useState } from 'react'
import { AppLayout } from '../layouts/AppLayout'
import { ConfettiModal } from '../components/organisms/modals/ConfettiModal'

type Step = {
  id: string
  text: string
  completed: boolean
}

export function KitchenSetupShowcase() {
  const [showModal, setShowModal] = useState(false)

  const [steps, setSteps] = useState<Step[]>([
    { id: '1', text: 'Add team members', completed: false },
    { id: '2', text: 'Upload 6 invoice photos', completed: false },
    { id: '3', text: 'Automate invoice direct from 1 supplier', completed: false },
    { id: '4', text: 'Check big price changes', completed: false },
    { id: '5', text: 'Get the flash report', completed: false },
    { id: '6', text: 'Cost your cookbook', completed: false },
    { id: '7', text: 'Build a menu', completed: false },
    { id: '8', text: 'Count a stock sheet', completed: false },
    { id: '9', text: 'Place an order', completed: false },
  ])

  function completeStep(step: Step) {
    const newSteps = []

    for (const current of steps) {
      if (current.id === step.id) {
        current.completed = true
      }

      newSteps.push(current)
    }

    setSteps(newSteps)

    // Trigger confetti
    if (steps.filter(s => s.completed).length === steps.length) {
      setShowModal(true)
    }
  }

  return (
    <AppLayout state="homescreen">
      <div className="min-h-full p-4 flex justify-center items-center">
        <div className="max-w-96 w-full">
          <ConfettiModal
            open={showModal}
            onClose={() => setShowModal(false)}
          />

          <KitchenSetup<Step>
            steps={steps}
            onClick={completeStep}
            getStepKey={step => step.id}
          />
        </div>
      </div>
    </AppLayout>
  )
}
