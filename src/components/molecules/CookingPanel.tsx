import imageSrc from '../../assets/cooking.svg'
import { ImagePanel } from './ImagePanel'

type Props = {
  title?: string
  subtitle?: string
}

export function CookingPanel({ title, subtitle }: Props) {
  return (
    <ImagePanel
      imageSrc={imageSrc}
      alt="Cooking"
      title={title || ''}
      subtitle={subtitle}
      mixBlendDarken
    />
  )
}
