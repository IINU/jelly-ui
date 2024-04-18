import { ResetPasswordPanel } from '../components/organisms/ResetPasswordPanel'

type Props = {
  onClick: (...args: unknown[]) => void
}

export function ResetPasswordPanelShowcase({ onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <ResetPasswordPanel
        resetPassword={onClick}
        loginLinkClicked={onClick}
      />
    </div>
  )
}
