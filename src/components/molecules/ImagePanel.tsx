import { Typography, TypographyStyle } from '../atoms/Typography'

type ImagePanelSize = 'sm' | 'lg'

type Props = {
  imageSrc: string
  alt: string
  title: string
  subtitle?: string
  /** Blend the image's (white) background into the page. Off by default. */
  mixBlendDarken?: boolean
  /**
   * Visual size of the panel. 'lg' (default) renders a large centred image;
   * 'sm' renders a compact 48px image with tighter spacing.
   */
  size?: ImagePanelSize
}

const sizeStyles: Record<
  ImagePanelSize,
  { container: string; image: string; title: TypographyStyle }
> = {
  lg: { container: 'jui-py-4', image: 'jui-w-44 jui-h-44', title: 'h6' },
  sm: {
    container: 'jui-gap-4 jui-py-6',
    image: 'jui-w-12 jui-h-12',
    title: 'subtitle1',
  },
}

// Internal shared primitive behind TrophyPanel / CoinInHandPanel. Not exported
// (mirrors how StatePanel backs the empty-state components).
export function ImagePanel({
  imageSrc,
  alt,
  title,
  subtitle,
  mixBlendDarken,
  size = 'lg',
}: Props) {
  const styles = sizeStyles[size]

  return (
    <div
      className={`jui-flex jui-flex-col jui-items-center ${styles.container}`}
    >
      <img
        className={`${styles.image}${
          mixBlendDarken ? ' jui-mix-blend-darken' : ''
        }`}
        src={imageSrc}
        alt={alt}
      />

      <div className="jui-space-y-2 jui-text-center jui-px-4">
        <Typography style={styles.title} className="jui-text-primary-900">
          {title}
        </Typography>

        {subtitle && (
          <Typography style="caption" className="jui-text-primary-600">
            {subtitle}
          </Typography>
        )}
      </div>
    </div>
  )
}
