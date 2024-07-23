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
    <div className="jui-w-full jui-shadow-medium jui-rounded jui-text-center">
      <div className="jui-px-4 jui-py-6 jui-space-y-1 jui-bg-white jui-rounded-t">
        <Typography style="h6" className="jui-text-primary-900">
          {title}
        </Typography>

        <Typography style="body1" className="jui-text-primary-900">
          {body}
        </Typography>
      </div>

      <img src={imageSrc} alt="feature demo" className="jui-w-full" />

      <div className="jui-p-4 jui-bg-white jui-rounded-b jui-space-y-4">
        <Button
          onClick={ctaClicked}
          disabled={!!disabledText}
          label={ctaText}
          className="jui-w-full"
        />

        {disabledText && (
          <Typography style="caption" className="jui-text-primary-600">
            {disabledText}
          </Typography>
        )}
      </div>
    </div>
  )
}