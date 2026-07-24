import { IconChevronLeft } from '@tabler/icons-react'

type Props = {
  onClick: () => void
  ariaLabel: string
}

export function BackButton({ onClick, ariaLabel }: Props) {
  return (
    <button
      aria-label={ariaLabel}
      className="jui-flex jui-h-5 jui-w-5 jui-items-center jui-justify-center jui-text-primary-900"
      onClick={onClick}
      type="button"
    >
      <IconChevronLeft className="jui-h-5 jui-w-5" stroke={2} />
    </button>
  )
}
