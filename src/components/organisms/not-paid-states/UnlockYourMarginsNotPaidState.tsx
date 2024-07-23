import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'
import { IconCircleCheckFilled } from '@tabler/icons-react'

type Props = {
  ctaClicked: () => void
}

export function UnlockYourMarginsNotPaidState({ ctaClicked }: Props) {
  return (
    <div className="jui-w-full jui-shadow-medium jui-rounded jui-text-center">
      <div className="jui-space-y-4 jui-bg-white jui-px-4 jui-py-6 jui-rounded-t">
        <div className="jui-space-y-1">
          <Typography style="h6" className="jui-text-primary-900">
            Unlock Your Margins
          </Typography>

          <Typography style="body1" className="jui-text-primary-900">
            You’re currently on the free plan. Upgrade to access powerful
            tools that will effortlessly free up your time, and keep you in
            control.
          </Typography>
        </div>

        <div className="jui-space-y-3 jui-px-2">
          <div className="jui-flex jui-space-x-2">
            <IconCircleCheckFilled className="jui-text-success-400"/>

            <Typography style="body1" className="jui-text-primary-900">
              Instant supplier price change alerts
            </Typography>
          </div>

          <div className="jui-flex jui-space-x-2">
            <IconCircleCheckFilled className="jui-text-success-400"/>

            <Typography style="body1" className="jui-text-primary-900">
              Real-time dish level GPs
            </Typography>
          </div>

          <div className="jui-flex jui-space-x-2">
            <IconCircleCheckFilled className="jui-text-success-400"/>

            <Typography style="body1" className="jui-text-primary-900">
              Count your stock
            </Typography>
          </div>
        </div>
      </div>

      <div className="jui-p-4 jui-bg-white jui-rounded-b jui-space-y-4 jui-border-t jui-border-primary-100">
        <Button
          onClick={ctaClicked}
          label="Upgrade Your Plan"
          className="jui-w-full"
        />
      </div>
    </div>
  )
}
