import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/speedy-stocktake.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function AccurateStockTakeEmptyState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Accurate and speedy stocktake"
      body="Simply input the quantity of your ingredients and have live prices totalled up for you."
      imageSrc={imageSrc}
      ctaText="Count Stock"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
