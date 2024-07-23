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
      <div className="jui-space-y-8">
        <div className="jui-text-center jui-space-y-2">
          <Typography style="h6">This is an example modal</Typography>

          <Typography style="caption">
            Modals are really good for showing some information or actions.
          </Typography>
        </div>

        <Button
          onClick={ctaClicked}
          className="jui-w-full jui-mt-4"
          label="Like this one"
        />
      </div>
    </Modal>
  )
}
