import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/digital-ordering.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function DigitalOrderingNotPaidState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Digital ordering - all in one"
      body="Never forget a thing - place orders with all your favourite suppliers."
      imageSrc={imageSrc}
      ctaText="Upgrade Your Plan"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
