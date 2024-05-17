import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/all-products-tracked.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function AllProductsTrackedEmptyState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="All your products - tracked"
      body="With JellyPlus/Pro, upload invoices and we’ll update and help track your products."
      imageSrc={imageSrc}
      ctaText="Add invoices"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
