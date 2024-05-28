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
        <div className="fixed z-20 w-screen h-screen top-0 left-0">
          <Confetti
            numberOfPieces={numberOfPieces}
            width={windowDimensions.width}
            height={windowDimensions.height}
          />
        </div>
      )}

      <Modal open={open} onClose={onClose}>
        <div className="space-y-8">
          <div className="flex flex-col items-center w-full">
            <img src={imageSrc} alt="Trophy" className="w-52"/>

            <div className="text-center space-y-2">
              <Typography style="h6">You rock!</Typography>

              <Typography style="caption">
                You’ve completed onboarding with flying colours. Here’s your Jelly trophy!
              </Typography>
            </div>
          </div>

          <Button
            onClick={handleButtonClick}
            className="w-full"
            label="Wait, no confetti?"
          />
        </div>
      </Modal>
    </>
  )
}
