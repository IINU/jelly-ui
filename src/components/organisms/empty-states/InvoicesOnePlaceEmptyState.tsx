import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/all-invoices-one-place.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function InvoicesOnePlaceEmptyState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="All your invoices in one place"
      body="Get all your supplier invoices, spend amounts, products and dates right here. No more sifting through paper."
      imageSrc={imageSrc}
      ctaText="Add invoices"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
