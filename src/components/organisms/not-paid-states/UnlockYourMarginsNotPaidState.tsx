import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'
import { IconCircleCheckFilled } from '@tabler/icons-react'

type Props = {
  ctaClicked: () => void
}

export function UnlockYourMarginsNotPaidState({ ctaClicked }: Props) {
  return (
    <div className="w-full shadow-medium rounded text-center">
      <div className="space-y-4 bg-white px-4 py-6 rounded-t">
        <div className="space-y-1">
          <Typography style="h6" className="text-primary-900">
            Unlock Your Margins
          </Typography>

          <Typography style="body1" className="text-primary-900">
            You’re currently on the free plan. Upgrade to access powerful
            tools that will effortlessly free up your time, and keep you in
            control.
          </Typography>
        </div>

        <div className="space-y-3 px-2">
          <div className="flex space-x-2">
            <IconCircleCheckFilled className="text-success-400"/>

            <Typography style="body1" className="text-primary-900">
              Instant supplier price change alerts
            </Typography>
          </div>

          <div className="flex space-x-2">
            <IconCircleCheckFilled className="text-success-400"/>

            <Typography style="body1" className="text-primary-900">
              Real-time dish level GPs
            </Typography>
          </div>

          <div className="flex space-x-2">
            <IconCircleCheckFilled className="text-success-400"/>

            <Typography style="body1" className="text-primary-900">
              Count your stock
            </Typography>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-b space-y-4 border-t border-primary-100">
        <Button
          onClick={ctaClicked}
          label="Upgrade Your Plan"
          className="w-full"
        />
      </div>
    </div>
  )
}
