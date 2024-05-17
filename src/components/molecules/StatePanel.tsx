import { Button } from '../atoms/Button'
import { Typography } from '../atoms/Typography'

type Props = {
  title: string
  body: string
  imageSrc: string
  disabledText?: string
  ctaText: string
  ctaClicked: () => void
}

export function StatePanel({ title, body, imageSrc, ctaClicked, ctaText, disabledText }: Props) {
  return (
    <div className="w-full shadow-medium rounded text-center">
      <div className="px-4 py-6 space-y-1 bg-white rounded-t">
        <Typography style="h6" className="text-primary-900">
          {title}
        </Typography>

        <Typography style="body1" className="text-primary-900">
          {body}
        </Typography>
      </div>

      <img src={imageSrc} alt="feature demo" className="w-full" />

      <div className="p-4 bg-white rounded-b space-y-4">
        <Button
          onClick={ctaClicked}
          disabled={!!disabledText}
          label={ctaText}
          className="w-full"
        />

        {disabledText && (
          <Typography style="caption" className="text-primary-600">
            {disabledText}
          </Typography>
        )}
      </div>

    </div>
  )
}