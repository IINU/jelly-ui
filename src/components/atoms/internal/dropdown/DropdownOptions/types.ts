import { RefObject, ReactNode} from 'react'

export type DropdownOptionsProps<T> = {
  selectedOption: T | null
  options: T[]
  optionToId: (option: T) => number | string
  optionToLabel: (option: T) => string
  handleOptionClick: (option: T) => void
  dropdownRef: RefObject<HTMLDivElement>
  dropdownPosition: 'bottom' | 'top'
  wrapperRef: RefObject<HTMLDivElement>
  errorRef: RefObject<HTMLDivElement>
  dropdownStatusContent?: ReactNode
  optionsBottomContent?: ReactNode
}