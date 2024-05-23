import { Modal } from '../../atoms/Modal'
import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'

type Props = {
  open: boolean
  onClose: () => void
  ctaClicked: () => void
}

export function TestModal({ open, onClose, ctaClicked }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <Typography style="h6">This is an example modal</Typography>

          <Typography style="caption">
            Modals are really good for showing some information or actions.
          </Typography>
        </div>

        <Button
          onClick={ctaClicked}
          className="w-full mt-4"
          label="Like this one"
        />
      </div>
    </Modal>
  )
}
