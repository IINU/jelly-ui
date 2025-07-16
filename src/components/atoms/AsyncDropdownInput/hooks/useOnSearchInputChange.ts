import { useRef, useMemo, useCallback, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { AsyncDropdownAction } from '../types'

type UseSearchOnInputChangeParams<T> = {
  open: boolean
  fetchFn: (term: string, signal?: AbortSignal) => Promise<T[]>
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
  const fetchRef = useRef<(term: string, signal?: AbortSignal) => Promise<T[]>>(fetchFn)
  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    fetchRef.current = fetchFn
  }, [fetchFn])

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  const debouncedFetch = useMemo(
    () =>
      debounce(async (searchTerm: string) => {
        try {
          abortControllerRef.current?.abort()
          const controller = new AbortController()
          abortControllerRef.current = controller

          dispatch({ type: 'FETCH_START', searchTerm })

          if (cache.current[searchTerm]) {
            dispatch({
              type: 'FETCH_SUCCESS',
              resultingOptions: cache.current[searchTerm],
            })

            return
          }

          const results = await fetchRef.current(searchTerm, controller.signal)

          if (controller.signal.aborted) return

          cache.current[searchTerm] = results
          
          dispatch({ type: 'FETCH_SUCCESS', resultingOptions: results })
        } catch (err: unknown) {
          if (err instanceof DOMException && err.name === 'AbortError') {
            return
          }

          dispatch({
            type: 'FETCH_ERROR',
            errorMessage:
              err instanceof Error ? err.message : 'Failed to fetch options',
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
        abortControllerRef.current?.abort()
      }
    },
    [open, debouncedFetch],
  )

  return { onSearchInputChange }
}
