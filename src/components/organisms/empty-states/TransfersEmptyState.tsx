import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/transfers.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function TransfersEmptyState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Transfer between locations"
      body="Log what you send to another location so GP stays accurate across every location."
      imageSrc={imageSrc}
      ctaText="Add A New Transfer"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
