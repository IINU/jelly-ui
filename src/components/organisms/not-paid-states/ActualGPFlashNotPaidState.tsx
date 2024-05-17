import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/actual-gp-flash.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function ActualGPFlashNotPaidState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Actual GP % in a Flash"
      body="Get your actual GP % through the week, so you are always in control."
      imageSrc={imageSrc}
      ctaText="Upgrade Your Plan"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
