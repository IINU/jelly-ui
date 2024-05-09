import { JobRolePanel } from '../components/organisms/JobRolePanel'

type Props = {
  onboarding: boolean
  onClick: () => void
}

export function JobRolePanelShowcase({ onboarding, onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <JobRolePanel
        jobRoles={onClick}
        onboarding={onboarding}
      />
    </div>
  )
}
