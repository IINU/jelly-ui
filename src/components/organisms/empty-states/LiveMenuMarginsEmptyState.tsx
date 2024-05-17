import { StatePanel } from '../../molecules/StatePanel'
import imageSrc from '../../../assets/empty-states/live-menu-margins.png'

type Props = {
  ctaClicked: () => void
  disabledText?: string
}

export function LiveMenuMarginsEmptyState({ ctaClicked, disabledText }: Props) {
  return (
    <StatePanel
      title="Live menu margins"
      body="Build your menus and see how your GP is performing in one place."
      imageSrc={imageSrc}
      ctaText="Create Menu"
      ctaClicked={ctaClicked}
      disabledText={disabledText}
    />
  )
}
