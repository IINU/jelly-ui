import {useEffect, useMemo, useState} from 'react'
import {BaseDropdownProps} from "./internal/dropdown/dropdown.types";
import {DropdownUI} from "./internal/dropdown/DropdownUI";

type Props<T> = BaseDropdownProps<T> & {
  options: T[]
  searchable?: boolean
  loading?: boolean
}

export function DropdownInput<T>({
  optionToLabel,
  options,
  loading=false,
  searchable=true,
  emptyContent,
  ...restProps
}: Props<T>) {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const filteredOptions = useMemo(() => {
    if (!search) {
      return options
    }

    return options.filter(
      option => optionToLabel(option).toLowerCase().includes(search.toLowerCase()),
    )
  }, [optionToLabel, options, search])

  useEffect(() => {
    if (!open) {
      setSearch('')
    }
  }, [open])

  return (
    <DropdownUI<T>
      {...restProps}
      optionToLabel={optionToLabel}
      searchable={searchable}
      search={search}
      onSearchInputChange={setSearch}
      onFocus={() => setOpen(true)}
      open={open}
      setOpen={setOpen}
      loading={loading}
      options={filteredOptions}
      dropdownStatusContent={(filteredOptions.length === 0 && !loading)
        ? emptyContent : undefined}
    />
  )
}
