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
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <Typography style="h6">Jelly support</Typography>

          <Typography style="caption">
            This will start a chat in your Whatsapp support group. Do you want to
            continue?
          </Typography>
        </div>

        <Button
          onClick={ctaClicked}
          className="w-full"
          label="Continue"
        />
      </div>
    </Modal>
  )
}
