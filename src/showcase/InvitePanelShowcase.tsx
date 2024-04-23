import { InvitePanel } from '../components/organisms/InvitePanel'

type Props = {
  name: string
  onClick: (...args: unknown[]) => void
}

export function InvitePanelShowcase({ name, onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <InvitePanel
        next={onClick}
        invite={{ name }}
      />
    </div>
  )
}
