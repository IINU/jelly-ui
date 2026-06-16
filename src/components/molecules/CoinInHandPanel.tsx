import imageSrc from '../../assets/coin-in-hand.png'
import { ImagePanel } from './ImagePanel'

type Props = {
  title: string
  subtitle?: string
}

export function CoinInHandPanel({ title, subtitle }: Props) {
  return (
    <ImagePanel
      imageSrc={imageSrc}
      alt="Coin in hand"
      title={title}
      subtitle={subtitle}
      size="sm"
      mixBlendDarken
    />
  )
}
