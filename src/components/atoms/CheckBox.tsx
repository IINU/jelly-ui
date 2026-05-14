import { IconCircle } from '@tabler/icons-react'

type Size = 'small' | 'medium' | 'large'

type Props = {
  checked: boolean
  label: string
  onChange: (value: boolean) => void
  size?: Size
  disabled?: boolean
  className?: string
}

export function CheckBox({
  checked,
  label,
  onChange,
  size = 'medium',
  disabled = false,
  className = '',
}: Props) {
  const iconSizes: Record<Size, string> = {
    small: '1.25rem',
    medium: '1.5rem',
    large: '2rem',
  }

  const labelSizes: Record<Size, string> = {
    small: 'jui-text-xs jui-leading-4',
    medium: 'jui-text-sm jui-leading-[18px]',
    large: 'jui-text-base jui-leading-5',
  }

  const state = disabled
    ? 'jui-opacity-50 jui-cursor-not-allowed'
    : 'jui-cursor-pointer'

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`jui-inline-flex jui-items-center jui-space-x-2 jui-bg-transparent jui-p-0 jui-border-none ${state} ${className}`}
    >
      {checked ? (
        <span
          className="jui-inline-flex jui-items-center jui-justify-center jui-rounded-full jui-border-2 jui-border-primary-200 jui-bg-white"
          style={{ width: iconSizes[size], height: iconSizes[size] }}
        >
          <span className="jui-h-3/4 jui-w-3/4 jui-rounded-full jui-bg-secondary-400" />
        </span>
      ) : (
        <IconCircle size={iconSizes[size]} className="jui-text-primary-200" />
      )}
      <span
        className={`jui-font-lato jui-font-bold jui-tracking-[0px] jui-align-middle jui-text-primary-900 ${labelSizes[size]}`}
      >
        {label}
      </span>
    </button>
  )
}
