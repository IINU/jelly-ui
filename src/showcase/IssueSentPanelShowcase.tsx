import { useState } from 'react'

import { Button } from '../components/atoms/Button'
import { Modal } from '../components/atoms/Modal'
import { IssueSentPanel } from '../components/organisms/raised-issues/IssueSentPanel'
import { AppLayout } from '../layouts/AppLayout'

export function IssueSentPanelShowcase() {
  const [open, setOpen] = useState(false)

  return (
    <AppLayout state="homescreen">
      <div className="jui-p-4">
        <Modal open={open} onClose={() => setOpen(false)}>
          <IssueSentPanel />
        </Modal>

        <Button onClick={() => setOpen(true)} label="Open Issue Sent Panel" />
      </div>
    </AppLayout>
  )
}
