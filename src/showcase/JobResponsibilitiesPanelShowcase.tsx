import { JobResponsibilitiesPanel, Responsibility } from '../components/organisms/JobResponsibilitiesPanel'

type Props = {
  onClick: () => void
}

type Responsibilities = 'invoices' | 'spend' | 'recipes' | 'stock' | 'ordering' | 'teams'

export function JobResponsibilitiesPanelShowcase({ onClick }: Props) {
  const responsibilities: Record<Responsibilities, Responsibility> = {
    invoices: { name: 'Handling invoices', value: false },
    spend: { name: 'Tracking spend / GP', value: false },
    recipes: { name: 'Costing recipes', value: false },
    stock: { name: 'Counting stock', value: false },
    ordering: { name: 'Ordering supplies', value: false },
    teams: { name: 'Managing teams', value: false },
  }

  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <JobResponsibilitiesPanel<Responsibilities>
        responsibilities={responsibilities}
        submit={onClick}
      />
    </div>
  )
}
