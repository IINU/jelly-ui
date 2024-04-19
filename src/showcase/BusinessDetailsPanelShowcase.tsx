import { BusinessDetailsPanel } from '../components/organisms/BusinessDetailsPanel'

type Props = {
  onClick: (...args: unknown[]) => void
}

export function BusinessDetailsPanelShowcase({ onClick }: Props) {
  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <BusinessDetailsPanel businessDetails={onClick}/>
    </div>
  )
}
