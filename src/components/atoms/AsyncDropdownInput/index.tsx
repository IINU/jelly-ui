import { useEffect, useReducer } from 'react'
import { DropdownUI } from "../internal/dropdown/DropdownUI";
import { asyncDropdownReducer, createInitialState } from './AsyncDropdown.state';
import { AsyncDropdownProps } from './types';
import { useOnSearchInputChange } from './hooks/useOnSearchInputChange';
import { generateDropdownStatusContent } from './helpers/generateDropdownStatusContent';

export function AsyncDropdownInput<T>({
  error,
  fetchFn,
  debounceMs = 300,
  emptyContent,
  optionsBottomContent,
  ...restProps
}: AsyncDropdownProps<T>) {
  const [state, dispatch] = useReducer(asyncDropdownReducer<T>, createInitialState<T>())
  const { open, search, loading, options, fetchError, dropdownStatus } = state
  const { onSearchInputChange } = useOnSearchInputChange({ open, debounceMs, fetchFn, dispatch })

  useEffect(() => {
    onSearchInputChange(search)
  }, [open, search, onSearchInputChange])

  return (
    <DropdownUI
      {...restProps}
      error={error ?? fetchError}
      showErrorMessage={dropdownStatus === "closed"}
      searchable
      search={search}
      onSearchInputChange={(searchTerm) => dispatch({ type: "SET_SEARCH", searchTerm})}
      open={open}
      setOpen={(value) => dispatch({ type: "SET_OPEN", open: Boolean(value) })}
      onFocus={() => {
        if (!open) {
          dispatch({ type: "SET_OPEN", open: true })
        }
      }}
      loading={loading}
      options={options}
      optionsBottomContent={optionsBottomContent}
      dropdownStatusContent={generateDropdownStatusContent(dropdownStatus, emptyContent, optionsBottomContent)}
    />
  )
}