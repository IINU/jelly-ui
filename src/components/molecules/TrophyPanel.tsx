import imageSrc from '../../assets/trophy.png'
import { ImagePanel } from './ImagePanel'

type Props = {
  title: string
  subtitle?: string
}

export function TrophyPanel({ title, subtitle }: Props) {
  return (
    <ImagePanel
      imageSrc={imageSrc}
      alt="Trophy"
      title={title}
      subtitle={subtitle}
      mixBlendDarken
    />
  )
}
