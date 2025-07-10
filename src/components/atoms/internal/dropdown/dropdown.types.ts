import { ComponentType, ReactNode } from 'react'

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
  emptyContent?: ReactNode
  optionsBottomContent?: ReactNode
}

export type AsyncDropdownProps<T> = BaseDropdownProps<T> & {
  fetchFn: (search: string) => Promise<T[]>
  debounceMs?: number
}

export type AsyncDropdownStatus = 'open' | 'closed' | 'pre-fetching' | 'searching' | 'empty'

export type AsyncDropdownState<T> = {
  open: boolean;
  search: string;
  dropdownStatus: AsyncDropdownStatus;
  loading: boolean;
  options: T[];
  fetchError?: string;
}

export type AsyncDropdownAction<T> =
  | { type: 'FETCH_START', searchTerm: string }
  | { type: 'FETCH_SUCCESS', resultingOptions: T[] }
  | { type: 'FETCH_ERROR', errorMessage: string }
  | { type: 'SET_SEARCH', searchTerm: string }
  | { type: 'SET_OPEN', open: boolean }
