import { IconSelector } from '@tabler/icons-react'

type Props = {
  label: string
  count: number
  onClick: () => void
}

export function FilterTriggerButton({ label, count, onClick }: Props) {
  const hasSelection = count > 0

  return (
    <button
      type="button"
      onClick={onClick}
      className={`jui-flex jui-flex-1 jui-items-center jui-justify-center jui-gap-1 jui-py-2 jui-px-4 jui-cursor-pointer ${
        hasSelection ? 'jui-bg-secondary-200 jui-rounded-2xl' : ''
      }`}
    >
      <span
        className={`jui-font-rubik jui-font-medium jui-text-sm jui-leading-none jui-text-center ${
          hasSelection ? 'jui-text-primary-900' : 'jui-text-primary-600'
        }`}
      >
        {hasSelection ? `${label} (${count})` : label}
      </span>

      <IconSelector
        size={24}
        className={`jui-shrink-0 ${
          hasSelection ? 'jui-text-primary-900' : 'jui-text-primary-600'
        }`}
      />
    </button>
  )
}
