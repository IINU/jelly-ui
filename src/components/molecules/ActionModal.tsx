import { Modal } from '../atoms/Modal'
import { ComponentType } from 'react'
import { IconChevronRight } from '@tabler/icons-react'
import { Typography } from '../atoms/Typography'

type Action = {
  title: string
  subtitle?: string
  onClick: () => void
  icon: ComponentType<{ className?: string }>
}

type Props = {
  actions: Action[]
  open: boolean
  onClose: () => void
}

export function ActionModal({ open, onClose, actions }: Props) {
  return (
    <Modal open={open} onClose={onClose} className="!p-0" hideCloseButton>
      {actions.map(({ onClick, title, subtitle, icon: Icon }, index) => (
        <div key={index} onClick={onClick}
             className="px-3 py-4 flex space-x-2 border-t border-primary-100 first:border-none">
          <div className="flex items-center">
            <Icon className="text-primary-900"/>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <Typography style="subtitle1" className="text-primary-900">
              {title}
            </Typography>

            <Typography style="subtitle2" className="text-primary-400">
              {subtitle}
            </Typography>
          </div>

          <div className="flex items-center">
            <IconChevronRight className="text-primary-400"/>
          </div>
        </div>
      ))}
    </Modal>
  )
}
