import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/alert-price-changes.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function AlertPriceChangeEmptyState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Alert to price changes"
      body="Get notified when product prices go up or down."
      imageSrc={imageSrc}
      ctaText="Add Invoices"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
