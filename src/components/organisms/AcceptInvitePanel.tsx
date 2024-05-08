import { Button } from '../atoms/Button'
import { JellyLogoPrimary } from '../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../atoms/Typography'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'

import inviteImage from '../../assets/invite.png'

type Kitchen = {
  name: string
}

type Props = {
  acceptInvite: () => void
  kitchen?: Kitchen
  loading?: boolean
}

export function AcceptInvitePanel({
  acceptInvite,
  kitchen,
  loading,
}: Props) {
  useEnterSubmit({ ctaClicked })

  function ctaClicked() {
    acceptInvite()
  }

  return (
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="flex flex-col items-center rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <img src={inviteImage} alt="Evelope with a chef hat inside" className="w-36 h-36 mix-blend-darken"/>

        <div className="space-y-2">
          <Typography style="h6">You are invited!</Typography>

          {kitchen && (
            <Typography style="caption" className="text-primary-600 space-x-1">
              <span>From:</span>
              <span className="text-secondary-400">{kitchen.name}</span>
            </Typography>
          )}

          <Typography style="caption" className="text-primary-600">
            Great news! You've been invited to a simpler life with Jelly, our
            Back-of-House tool.
          </Typography>
        </div>

        <div className="flex flex-col space-y-2 w-full mt-8">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading}
            label="Join Us"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
