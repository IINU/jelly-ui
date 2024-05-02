import { JobResponsibilitiesPanel } from '../components/organisms/JobResponsibilitiesPanel'

type Props = {
  onClick: () => void
}

type Responsibility = {
  id: number
  name: string
}

export function JobResponsibilitiesPanelShowcase({ onClick }: Props) {
  const responsibilities: Responsibility[] = [
    { id: 1, name: 'Handling invoices' },
    { id: 2, name: 'Tracking spend / GP' },
    { id: 3, name: 'Costing recipes' },
    { id: 4, name: 'Counting stock' },
    { id: 5, name: 'Ordering supplies' },
    { id: 6, name: 'Managing teams' },
  ]

  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <JobResponsibilitiesPanel<Responsibility>
        responsibilities={
          responsibilities.map(r => ({ item: r, isChecked: false }))
        }
        getText={r => r.name}
        submit={onClick}
      />
    </div>
  )
}
