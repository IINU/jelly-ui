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
      body="No more sifting through stacks of paper. All documents digitised and organised."
      imageSrc={imageSrc}
      ctaText="Add Invoices"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
