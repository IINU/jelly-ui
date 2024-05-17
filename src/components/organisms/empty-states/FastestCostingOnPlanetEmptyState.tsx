import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/fastest-costing-on-planet.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function FastestCostingOnPlanetEmptyState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Fastest costing on the planet"
      body="Recipe costing with live prices and have the prices updated for you."
      imageSrc={imageSrc}
      ctaText="Create Dish/Recipe"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
