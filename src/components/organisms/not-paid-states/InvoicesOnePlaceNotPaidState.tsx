import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/all-invoices-one-place.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function InvoicesOnePlaceNotPaidState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="All your invoices in one place"
      body="Get all your supplier invoices, spend amounts, products and dates right here. No more sifting through paper."
      imageSrc={imageSrc}
      ctaText="Upgrade Your Plan"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
