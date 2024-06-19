import { ReactNode, useEffect, useRef } from 'react'
import { IconX } from '@tabler/icons-react'
import { getOrCreateModalRoot } from '../../utils/utils'
import { createPortal } from 'react-dom'

type Props = {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  hideCloseButton?: boolean
}

export function Modal({ open, onClose, children, className, hideCloseButton = false }: Props) {
  const modalRoot = getOrCreateModalRoot()
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

  const modalContent = (
    <div
      className="fixed inset-0 bg-primary-900 bg-opacity-90 flex items-center justify-center z-50 cursor-pointer !m-0 !p-4"
      onClick={(e => {
        e.stopPropagation()
        onClose()
      })}
    >
      <div
        className={`relative bg-white rounded w-full max-w-md max-h-full py-8 px-4 overflow-y-auto cursor-default ${className}`}
        onClick={e => e.stopPropagation()}
      >
        {!hideCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-3 mr-3 text-gray-500 hover:text-gray-800"
          >
            <IconX className="text-primary-900"/>
          </button>
        )}

        {children}
      </div>
    </div>
  )

  return createPortal(modalContent, elRef.current)
}
