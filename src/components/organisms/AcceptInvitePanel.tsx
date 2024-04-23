import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'

type Invite = {
  name: string
}

type Props = {
  acceptInvite: () => void
  invite: Invite
  loading?: boolean
}

export function AcceptInvitePanel({
  acceptInvite,
  invite,
  loading,
}: Props) {
  useEnterSubmit({ ctaClicked })

  function ctaClicked() {
    acceptInvite()
  }

  return (
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogo/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-6 w-full items-center">
          <Typography style="caption" className="flex flex-col text-primary-600 space-x-1">
            <span>You've been invited to join</span>
            <span className="text-secondary-400">{invite.name}</span>
          </Typography>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading}
            label="JOIN"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
