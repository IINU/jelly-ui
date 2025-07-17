import { BaseDropdownProps } from '../internal/dropdown/dropdown.types'

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
