import { Modal } from '../atoms/Modal'
import { ComponentType } from 'react'
import { IconChevronRight } from '@tabler/icons-react'
import { Typography } from '../atoms/Typography'

type Action = {
  title: string
  subtitle?: string
  onClick: () => void
  icon?: ComponentType<{ className?: string }>
}

type Props = {
  actions: Action[]
  open: boolean
  onClose: () => void
}

export function ActionModal({ open, onClose, actions }: Props) {
  return (
    <Modal open={open} onClose={onClose} className="!jui-p-0" hideCloseButton>
      {actions.map(({ onClick, title, subtitle, icon: Icon }, index) => (
        <div
          key={index}
          onClick={onClick}
          className="jui-px-3 jui-py-4 jui-flex jui-space-x-2 jui-border-t jui-border-primary-100 first:jui-border-none jui-cursor-pointer"
        >
          {Icon && (
            <div className="jui-flex jui-items-center">
              <Icon className="jui-text-primary-900"/>
            </div>
          )}

          <div className="jui-flex-1 jui-flex jui-flex-col jui-justify-center">
            <Typography style="subtitle1" className="jui-text-primary-900">
              {title}
            </Typography>

            <Typography style="subtitle2" className="jui-text-primary-400">
              {subtitle}
            </Typography>
          </div>

          <div className="jui-flex jui-items-center">
            <IconChevronRight className="jui-text-primary-400"/>
          </div>
        </div>
      ))}
    </Modal>
  )
}
