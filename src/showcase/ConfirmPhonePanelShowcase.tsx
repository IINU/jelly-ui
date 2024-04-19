import { ConfirmPhonePanel } from '../components/organisms/ConfirmPhonePanel'

type Props = {
  onClick: (...args: unknown[]) => void
}

export function ConfirmPhonePanelShowcase({ onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <ConfirmPhonePanel
        confirmCode={onClick}
        resendCodeClicked={onClick}
        loginLinkClicked={onClick}
      />
    </div>
  )
}
