import { NewPasswordPanel } from '../components/organisms/NewPasswordPanel'

type Props = {
  onClick: (...args: unknown[]) => void
}

export function NewPasswordPanelShowcase({ onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <NewPasswordPanel
        newPassword={onClick}
        loginLinkClicked={onClick}
      />
    </div>
  )
}
