import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/fastest-costing-on-planet.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function FastestCostingOnPlanetNotPaidState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Fastest costing on the planet"
      body="Recipe costing with live prices and have the prices updated for you."
      imageSrc={imageSrc}
      ctaText="Upgrade Your Plan"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
