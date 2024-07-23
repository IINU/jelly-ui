import { ReactNode, useEffect, useRef } from 'react'
import { IconX } from '@tabler/icons-react'
import { getOrCreateDivRoot } from '../../utils/utils'
import { createPortal } from 'react-dom'

type Props = {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  hideCloseButton?: boolean
}

export function Modal({ open, onClose, children, className = '', hideCloseButton = false }: Props) {
  const modalRoot = getOrCreateDivRoot('modal')
  const elRef = useRef<HTMLDivElement | null>(null)

  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    const el = elRef.current!
    modalRoot.appendChild(el)
    return () => {
      modalRoot.removeChild(el)
    }
  }, [modalRoot])

  if (!open) {
    return null
  }

  return createPortal((
    <div
      className="jui-fixed jui-inset-0 jui-bg-primary-900 jui-bg-opacity-90 jui-flex jui-items-center jui-justify-center jui-z-40 jui-cursor-pointer !jui-m-0 !jui-p-4"
      onClick={(e => {
        e.stopPropagation()
        onClose()
      })}
    >
      <div
        className={`jui-relative jui-bg-white jui-rounded jui-w-full jui-max-w-md jui-max-h-full jui-py-8 jui-px-4 jui-overflow-y-auto jui-cursor-default ${className}`}
        onClick={e => e.stopPropagation()}
      >
        {!hideCloseButton && (
          <button
            onClick={onClose}
            className="jui-absolute jui-top-0 jui-right-0 jui-mt-3 jui-mr-3 jui-text-primary-900 hover:jui-text-primary-600"
          >
            <IconX/>
          </button>
        )}

        {children}
      </div>
    </div>
  ), elRef.current)
}
