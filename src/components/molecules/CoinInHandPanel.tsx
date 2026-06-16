import imageSrc from '../../assets/coin-in-hand.png'
import { ImagePanel, ImagePanelSize } from './ImagePanel'

type Props = {
  title: string
  subtitle?: string
  /**
   * Visual size of the panel. Defaults to 'lg' (large centred coin); pass 'sm'
   * for the compact 48px variant.
   */
  size?: ImagePanelSize
}

export function CoinInHandPanel({ title, subtitle, size = 'lg' }: Props) {
  return (
    <ImagePanel
      imageSrc={imageSrc}
      alt="Coin in hand"
      title={title}
      subtitle={subtitle}
      size={size}
    />
  )
}
