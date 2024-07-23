import { Button } from '../../atoms/Button'
import { JellyLogoPrimary } from '../../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../../atoms/Typography'
import { useEnterSubmit } from '../../../hooks/useEnterSubmit'

import inviteImage from '../../../assets/invite.png'

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
    <div className="jui-shadow jui-w-full jui-rounded-md">
      <div className="jui-rounded-t-md jui-bg-white jui-p-4 jui-flex jui-flex-col jui-items-center jui-justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="jui-flex jui-flex-col jui-items-center jui-rounded-b-md jui-bg-primary-50 jui-px-4 jui-py-8 jui-text-center">
        <img src={inviteImage} alt="Evelope with a chef hat inside" className="jui-w-36 jui-h-36 jui-mix-blend-darken"/>

        <div className="jui-space-y-2">
          <Typography style="h6" className="jui-text-primary-900">
            You are invited!
          </Typography>

          {kitchen && (
            <Typography style="caption" className="jui-text-primary-600 jui-space-x-1">
              <span>From:</span>
              <span className="jui-text-secondary-400">{kitchen.name}</span>
            </Typography>
          )}

          <Typography style="caption" className="jui-text-primary-600">
            Great news! You've been invited to a simpler life with Jelly, our
            Back-of-House tool.
          </Typography>
        </div>

        <div className="jui-flex jui-flex-col jui-space-y-2 jui-w-full jui-mt-8">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading}
            label="Join Us"
            className="jui-w-full"
          />
        </div>
      </div>
    </div>
  )
}
