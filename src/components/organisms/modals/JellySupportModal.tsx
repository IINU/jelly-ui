import { Modal } from '../../atoms/Modal'
import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'

type Props = {
  open: boolean
  onClose: () => void
  ctaClicked: () => void
}

export function JellySupportModal({ open, onClose, ctaClicked }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="jui-space-y-8">
        <div className="jui-text-center jui-space-y-2">
          <Typography style="h6" className="jui-text-primary-900">
            Jelly support
          </Typography>

          <Typography style="caption" className="jui-text-primary-800">
            This will start a chat in your Whatsapp support group. Do you want
            to continue?
          </Typography>
        </div>

        <Button
          onClick={ctaClicked}
          className="jui-w-full"
          label="Continue"
        />
      </div>
    </Modal>
  )
}
