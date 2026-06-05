import { Typography } from '../atoms/Typography'

type Props = {
  imageSrc: string
  alt: string
  title: string
  subtitle?: string
  /** Blend the image's (white) background into the page. Off by default. */
  mixBlendDarken?: boolean
}

// Internal shared primitive behind TrophyPanel / CoinInHandPanel. Not exported
// (mirrors how StatePanel backs the empty-state components).
export function ImagePanel({
  imageSrc,
  alt,
  title,
  subtitle,
  mixBlendDarken,
}: Props) {
  return (
    <div className="jui-flex jui-flex-col jui-items-center jui-py-4">
      <img
        className={`jui-w-44 jui-h-44${
          mixBlendDarken ? ' jui-mix-blend-darken' : ''
        }`}
        src={imageSrc}
        alt={alt}
      />

      <div className="jui-space-y-2 jui-text-center jui-px-4">
        <Typography style="h6" className="jui-text-primary-900">
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
