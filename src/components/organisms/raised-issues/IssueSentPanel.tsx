import { Typography } from '../../atoms/Typography'

import inviteImage from '../../../assets/invite.png'

export function IssueSentPanel() {
  return (
    <div className="jui-flex jui-flex-col jui-items-center jui-text-center">
      <img
        src={inviteImage}
        alt="Envelope with a chef hat inside"
        className="jui-h-40 jui-w-40 jui-mix-blend-darken"
      />

      <div className="jui-mt-4 jui-space-y-2">
        <Typography
          style="h6"
          className="jui-leading-none jui-text-primary-900"
        >
          Issue sent!
        </Typography>

        <p className="jui-font-lato jui-text-sm jui-font-bold jui-leading-[1.125rem] jui-text-primary-600">
          The supplier may reply by email or call you.
          <br />
          <br />
          Track this open issue in Jelly and once sorted, mark it as ‘Resolved’
        </p>
      </div>
    </div>
  )
}
