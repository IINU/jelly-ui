import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

import type { ConfettiOverlayProps } from './types'

const decrementAmount = 25
const decrementIntervalMs = 500

export function ConfettiOverlay({
  durationMs,
  initialPieces,
  onComplete,
}: ConfettiOverlayProps) {
  const [numberOfPieces, setNumberOfPieces] = useState(initialPieces)
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNumberOfPieces((pieces) =>
        pieces <= decrementAmount ? 0 : pieces - decrementAmount,
      )
    }, decrementIntervalMs)

    const timeout = window.setTimeout(onComplete, durationMs)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(timeout)
    }
  }, [durationMs, onComplete])

  return (
    <div className="jui-fixed jui-z-20 jui-w-screen jui-h-screen jui-top-0 jui-left-0 jui-pointer-events-none">
      <Confetti
        numberOfPieces={numberOfPieces}
        width={windowDimensions.width}
        height={windowDimensions.height}
      />
    </div>
  )
}
