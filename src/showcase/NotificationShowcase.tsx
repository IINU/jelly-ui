import { ReactNode } from 'react'

import {
  Notification,
  NotificationVariant,
} from '../components/molecules/Notification'

type Props = {
  variant: NotificationVariant
  text: ReactNode
  onClick?: () => void
}

export function NotificationShowcase({ variant, text, onClick }: Props) {
  return (
    <div className="jui-w-full jui-flex jui-flex-col">
      <div className="jui-w-full jui-p-8 jui-bg-white jui-space-y-2">
        <Notification variant={variant} text={text} onClick={onClick} />
      </div>
    </div>
  )
}
