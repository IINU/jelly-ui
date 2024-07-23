import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

import { Modal } from '../../atoms/Modal'
import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'
import imageSrc from '../../../assets/trophy.png'

type Props = {
  open: boolean
  onClose: () => void
}

export function ConfettiModal({ open, onClose }: Props) {
  const [numberOfPieces, setNumberOfPieces] = useState(200)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (showConfetti) {
      timeout = setInterval(() => {
        if (numberOfPieces <= 0) {
          clearInterval(timeout)
          setNumberOfPieces(0)
        } else {
          setNumberOfPieces(numberOfPieces - 25)
        }
      }, 500)
    }

    return () => clearInterval(timeout)
  }, [showConfetti, numberOfPieces])

  function handleButtonClick() {
    setNumberOfPieces(250)
    setShowConfetti(true)
    onClose()
    setTimeout(() => setShowConfetti(false), 7500)
  }

  return (
    <>
      {showConfetti && (
        <div className="jui-fixed jui-z-20 jui-w-screen jui-h-screen jui-top-0 jui-left-0 jui-pointer-events-none">
          <Confetti
            numberOfPieces={numberOfPieces}
            width={windowDimensions.width}
            height={windowDimensions.height}
          />
        </div>
      )}

      <Modal open={open} onClose={onClose}>
        <div className="jui-space-y-8">
          <div className="jui-flex jui-flex-col jui-items-center jui-w-full">
            <img src={imageSrc} alt="Trophy" className="jui-w-52"/>

            <div className="jui-text-center jui-space-y-2">
              <Typography style="h6" className="jui-text-primary-900">You rock!</Typography>

              <Typography style="caption" className="jui-text-primary-800">
                You’ve completed onboarding with flying colours. Here’s your
                Jelly trophy!
              </Typography>
            </div>
          </div>

          <Button
            onClick={handleButtonClick}
            className="jui-w-full"
            label="Where's the party?"
          />
        </div>
      </Modal>
    </>
  )
}
