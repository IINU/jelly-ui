import { ReactNode } from 'react'
import { IconX } from '@tabler/icons-react'

type Props = {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  hideCloseButton?: boolean
}

export function Modal({ open, onClose, children, className, hideCloseButton = false }: Props) {
  if (!open) {
    return <></>
  }

  return (
    <div
      className="fixed inset-0 bg-primary-900 bg-opacity-90 flex items-center justify-center z-50 px-4 cursor-pointer"
      onClick={onClose}
    >
      <div
        className={`relative bg-white rounded w-full max-w-md py-8 px-4 cursor-default ${className}`}
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
}
