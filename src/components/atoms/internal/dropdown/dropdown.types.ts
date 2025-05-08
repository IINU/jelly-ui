import { ComponentType } from 'react'

export type BaseDropdownProps<T> = {
  name?: string
  placeholder?: string
  value: T | null
  optionToId: (option: T) => number | string
  optionToLabel: (option: T) => string
  optionToSearchValue?: (option: T) => string
  onChange: (value: T | null) => void
  error?: string
  icon?: ComponentType<{ className?: string }>
  className?: string
  disabled?: boolean
}
