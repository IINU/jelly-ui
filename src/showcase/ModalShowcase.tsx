import { ComponentType, useState } from 'react'
import { Button } from '../components/atoms/Button'
import { AppLayout } from '../layouts/AppLayout'

type Props<T> = {
  component: ComponentType<{
    open: boolean
    onClose: () => void
  } & T>
  props: T
}

export function ModalShowcase<T>({ component: Component, props }: Props<T>) {
  const [open, setOpen] = useState(false)

  return (
    <AppLayout state="homescreen">
      <div className="p-4">
        <Component
          open={open}
          onClose={() => setOpen(false)}
          {...props}
        />

        <Button onClick={() => setOpen(true)} label="Open Modal"/>
      </div>
    </AppLayout>
  )
}
