import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/all-products-tracked.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function AllProductsTrackedNotPaidState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="All your products - tracked"
      body="With JellyPlus/Pro, upload invoices and we’ll update and help track your products."
      imageSrc={imageSrc}
      ctaText="Upgrade Your Plan"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
