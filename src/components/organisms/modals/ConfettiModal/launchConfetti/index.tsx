import { createRoot } from 'react-dom/client'

import { ConfettiOverlay } from '../ConfettiOverlay'
import type { LaunchConfettiParams } from './types'

export function launchConfetti({
  durationMs = 7500,
  initialPieces = 250,
}: LaunchConfettiParams = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const root = createRoot(container)

  root.render(
    <ConfettiOverlay
      durationMs={durationMs}
      initialPieces={initialPieces}
      onComplete={() => {
        root.unmount()
        container.remove()
      }}
    />,
  )
}
