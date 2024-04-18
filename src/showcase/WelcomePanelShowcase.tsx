import { WelcomePanel } from '../components/organisms/WelcomePanel'

type Props = {
  onClick: (...args: unknown[]) => void
}

export function WelcomePanelShowcase({ onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <WelcomePanel ctaClicked={onClick} loginLinkClicked={onClick}/>
    </div>
  )
}
