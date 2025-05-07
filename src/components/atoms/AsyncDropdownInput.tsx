import {useEffect, useCallback, useMemo, useRef, useReducer, useState} from 'react'
import debounce from 'lodash/debounce'
import {BaseDropdownProps} from "./internal/dropdown/dropdown.types";
import {DropdownUI} from "./internal/dropdown/DropdownUI";

type State<T> = {
  search: string;
  dropdownStatusText?: string;
  loading: boolean;
  options: T[];
  fetchError?: string;
  firstFetchDone: boolean;
}

type Action<T> =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS', resultingOptions: T[] }
  | { type: 'FETCH_ERROR', errorMessage: string }
  | { type: 'FETCH_ATTEMPT_DONE' }
  | { type: 'SET_SEARCH', searchTerm: string }
  | { type: 'CLOSE_DROPDOWN' }
  | { type: 'UPDATE_DROPDOWN_STATUS' }

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        fetchError: undefined,
        loading: true
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        options: action.resultingOptions,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        fetchError: action.errorMessage,
        options: []
      };
    case 'FETCH_ATTEMPT_DONE':
      return {
        ...state,
        loading: false,
        firstFetchDone: true
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.searchTerm,
      };
    case 'CLOSE_DROPDOWN':
      return {
        ...state,
        options: [],
        search: '',
        firstFetchDone: false,
      };
    case 'UPDATE_DROPDOWN_STATUS': {
      const {options, fetchError, firstFetchDone} = state
      if (options.length || fetchError) {
        return {
          ...state,
          dropdownStatusText: undefined,
        }
      } else if (firstFetchDone) {
        return {
          ...state,
          dropdownStatusText: 'No matches found',
        }
      } else {
        return {
          ...state,
          dropdownStatusText: 'Searching...',
        }
      }
    }
  }
}

type Props<T> = BaseDropdownProps<T> & {
  fetchOptions: (search: string) => Promise<T[]>
  debounceMs?: number
}

export function AsyncDropdownInput<T>({
  error,
  fetchOptions,
  debounceMs = 300,
  ...restProps
}: Props<T>) {
  const [open, setOpen] = useState(false)
  const [state, dispatch] = useReducer(reducer<T>, {
    search: '',
    loading: false,
    options: [],
    fetchError: undefined,
    firstFetchDone: false
  });
  const { search, loading, options, fetchError, dropdownStatusText, firstFetchDone } = state

  const cache = useRef<{ [key: string]: T[] }>({})

  const debouncedFetch = useMemo(
    () => debounce(async (searchTerm: string) => {
      dispatch({ type: 'FETCH_START' })
      try {
        const results = cache.current[searchTerm] ?? await fetchOptions(searchTerm)
        dispatch({
          type: 'FETCH_SUCCESS',
          resultingOptions: results
        })
        cache.current[searchTerm] = results
      } catch (err) {
        dispatch({
          type: 'FETCH_ERROR',
          errorMessage: err instanceof Error ? err.message : 'Failed to fetch options'
        })
      } finally {
        dispatch({
          type: 'FETCH_ATTEMPT_DONE',
        })
      }
    }, debounceMs),
  [fetchOptions, debounceMs])

  const handleSearchChange = useCallback(
    (newSearch: string) => {
      if (open) {
        dispatch({
          type: 'SET_SEARCH',
          searchTerm: newSearch
        })
        debouncedFetch(newSearch)
      }
    },
    [debouncedFetch, open]
  )

  useEffect(() => {
    if (open) {
      handleSearchChange('')
    } else {
      dispatch({
        type: 'CLOSE_DROPDOWN',
      })
      cache.current = {}
    }
  }, [handleSearchChange, open])

  useEffect(() => {
    dispatch({
      type: 'UPDATE_DROPDOWN_STATUS',
    })
  }, [options, fetchError, firstFetchDone])

  return <DropdownUI
    {...restProps}
    error={error ?? fetchError}
    searchable
    search={search}
    handleSearchChange={handleSearchChange}
    open={open}
    setOpen={setOpen}
    loading={loading}
    options={options}
    dropdownStatusText={dropdownStatusText}
  />
}