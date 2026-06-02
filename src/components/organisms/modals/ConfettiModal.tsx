import { Modal } from '../../atoms/Modal'
import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'
import imageSrc from '../../../assets/trophy.png'
import { launchConfetti } from './ConfettiModal/launchConfetti'

type Props = {
  open: boolean
  onClose: () => void
  headingText?: string
  captionText?: string
  buttonText?: string
}

export function ConfettiModal({
  open,
  onClose,
  headingText = '',
  captionText = '',
  buttonText = 'done',
}: Props) {
  function handleButtonClick() {
    launchConfetti()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="jui-space-y-8">
        <div className="jui-flex jui-flex-col jui-items-center jui-w-full">
          <img src={imageSrc} alt="Trophy" className="jui-w-52" />

          <div className="jui-text-center jui-space-y-2">
            <Typography style="h6" className="jui-text-primary-900">
              {headingText}
            </Typography>

            <Typography style="caption" className="jui-text-primary-800">
              {captionText}
            </Typography>
          </div>
        </div>

        <Button
          onClick={handleButtonClick}
          className="jui-w-full"
          label={buttonText}
        />
      </div>
    </Modal>
  )
}
