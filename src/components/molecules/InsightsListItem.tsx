import { Typography } from '../atoms/Typography'
import { ComponentType, useState } from 'react'
import { Accent, accentToText } from '../../utils/accent'
import { IconChevronRight } from '@tabler/icons-react'
import { Pill } from '../atoms/Pill'
import { Modal } from '../atoms/Modal'

type Props = {
  automated?: boolean
  overridden?: boolean
  readonly?: boolean
  title: string
  subtitle: string
  data: string
  onClick?: () => void
  icon?: ComponentType<{ className?: string }>
  accent?: Accent
  className?: string
}

export function InsightsListItem({
  automated = false,
  overridden = false,
  readonly = false,
  title,
  subtitle,
  data,
  onClick,
  icon: Icon,
  accent,
  className = '',
}: Props) {
  if (readonly) {
    onClick = undefined
  }

  const [showModal, setShowModal] = useState(false)

  const borders = 'jui-border-b jui-border-primary-100 last:jui-border-none'
  const cursor = onClick ? 'jui-cursor-pointer' : 'jui-cursor-default'
  const padding = onClick ? 'jui-py-4 jui-pl-3 jui-pr-2' : 'jui-py-4 jui-px-3'

  className = `${borders} ${padding} ${cursor} ${className}`

  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="jui-space-y-4">
          <Typography style="h6" className="jui-text-primary-900">
            Automated
          </Typography>

          <Typography style="subtitle2" className="jui-text-primary-900">
            Your POS system automatically shares your sales data with us.
          </Typography>
        </div>
      </Modal>

      <div
        className={`jui-bg-white jui-flex jui-justify-between jui-items-center jui-space-x-4 ${className}`}
        onClick={onClick}
      >
        <div className="jui-flex jui-flex-col jui-items-start jui-justify-center jui-space-y-2">
          <div>
            <Typography
              style="subtitle1"
              className="jui-text-primary-800 jui-line-clamp-1 jui-flex-1"
            >
              {title}
            </Typography>

            <Typography
              style="body2"
              className="jui-text-primary-600 jui-line-clamp-1 jui-flex-1"
            >
              {subtitle}
            </Typography>
          </div>

          {automated && (
            <Pill
              variant="success"
              label="Automated"
              onClick={(e) => {
                e.stopPropagation()
                setShowModal(true)
              }}
            />
          )}

          {overridden && (
            <Pill
              variant="success"
              label="Overridden"
              onClick={(e) => {
                e.stopPropagation()
                setShowModal(true)
              }}
            />
          )}
        </div>

        <div className="jui-flex jui-items-center jui-space-x-1 jui-flex-shrink-0">
          <div className="jui-flex jui-flex-col jui-items-center jui-justify-center">
            {Icon && <Icon className={accentToText(accent)} />}

            <Typography style="h6" className={accentToText(accent)}>
              {data}
            </Typography>
          </div>

          {!!onClick && <IconChevronRight className="jui-text-secondary-400" />}
        </div>
      </div>
    </>
  )
}
