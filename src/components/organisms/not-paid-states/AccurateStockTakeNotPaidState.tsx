import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/speedy-stocktake.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function AccurateStockTakeNotPaidState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Accurate and speedy stocktake"
      body="Simply input the quantity of your ingredients and have live prices totalled up for you."
      imageSrc={imageSrc}
      ctaText="Upgrade Your Plan"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
