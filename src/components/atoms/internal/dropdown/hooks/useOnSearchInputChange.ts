import { useRef, useMemo, useCallback, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { AsyncDropdownAction } from '../dropdown.types'

type UseSearchOnInputChangeParams<T> = {
  open: boolean
  fetchFn: (term: string) => Promise<T[]>
  debounceMs: number
  dispatch: React.Dispatch<AsyncDropdownAction<T>>
}

export function useOnSearchInputChange<T>({
  open,
  fetchFn,
  debounceMs,
  dispatch,
}: UseSearchOnInputChangeParams<T>) {
  const cache = useRef<Record<string, T[]>>({})
  const fetchRef = useRef(fetchFn);
  
  useEffect(() => {
    fetchRef.current = fetchFn;
  }, [fetchFn]);

  const debouncedFetch = useMemo(
    () =>
      debounce(async (searchTerm: string) => {
        try {
          dispatch({ type: 'FETCH_START', searchTerm })
       
          if (cache.current[searchTerm]){
            dispatch({ type: 'FETCH_SUCCESS', resultingOptions: cache.current[searchTerm] })

            return
          }

          // TODO cancellable promises
          const results = await fetchRef.current(searchTerm)
          
          dispatch({ type: 'FETCH_SUCCESS', resultingOptions: results })
          
          cache.current[searchTerm] = results
        } catch (err) {
          dispatch({
            type: 'FETCH_ERROR',
            errorMessage: err instanceof Error ? err.message : 'Failed to fetch options',
          })
        }
      }, debounceMs),
    [debounceMs, dispatch],
  )

  const onSearchInputChange = useCallback(
    (newSearch: string) => {
      if (open) {
        debouncedFetch(newSearch)
      } else {
        cache.current = {}
      }
    },
    [open, debouncedFetch],
  )

  return { onSearchInputChange }
}
