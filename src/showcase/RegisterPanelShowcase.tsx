import { RegisterPanel } from '../components/organisms/RegisterPanel'

type Props = {
  onClick: (...args: unknown[]) => void
}

export function RegisterPanelShowcase({ onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <RegisterPanel
        register={onClick}
        loginLinkClicked={onClick}
        tacClicked={onClick}
        privacyPolicyClicked={onClick}
      />
    </div>
  )
}
