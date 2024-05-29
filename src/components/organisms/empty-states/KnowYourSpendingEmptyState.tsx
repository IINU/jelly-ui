import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/know-your-spending.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function KnowYourSpendingEmptyState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Know your spending"
      body="Get your total spend and breakdown by supplier."
      imageSrc={imageSrc}
      ctaText="Add Invoices"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
