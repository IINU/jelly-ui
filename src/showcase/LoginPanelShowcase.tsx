import { LoginPanel } from '../components/organisms/LoginPanel'

type Props = {
  onClick: (...args: unknown[]) => void
}

export function LoginPanelShowcase({ onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <LoginPanel
        login={onClick}
        forgotPasswordLinkClicked={onClick}
        registerLinkClicked={onClick}
      />
    </div>
  )
}
