import { AcceptInvitePanel } from '../components/organisms/AcceptInvitePanel'

type Props = {
  name: string
  onClick: (...args: unknown[]) => void
}

export function AcceptInvitePanelShowcase({ name, onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <AcceptInvitePanel
        acceptInvite={onClick}
        invite={{ name }}
      />
    </div>
  )
}
