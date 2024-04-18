import React, { useState, useEffect, useMemo, useRef } from 'react'
import { IconChevronDown, IconChevronUp, IconLoader2 } from '@tabler/icons-react'
import { Typography } from './Typography'

type Props<T> = {
  placeholder: string
  value: T | null
  options: T[]
  optionToId: (option: T) => number | string
  optionToLabel: (option: T) => string
  optionToSearchValue?: (option: T) => string
  onChange: (value: T | null) => void
  error?: string
  loading?: boolean
  icon?: React.ComponentType<{ className?: string }>
};

export function DropdownInput<T>({
  placeholder,
  value,
  options,
  optionToId,
  optionToLabel,
  optionToSearchValue,
  onChange,
  error,
  icon: Icon,
  loading = false,
}: Props<T>) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState<T | null>(value)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    if (inputValue) {
      setSearch(
        optionToSearchValue
          ? optionToSearchValue(inputValue)
          : optionToLabel(inputValue)
      )
    } else {
      setSearch('')
    }
  }, [optionToLabel, optionToSearchValue, inputValue])

  const filteredOptions = useMemo(() => {
    if (!search) {
      return options
    }

    return options.filter(
      option => optionToLabel(option).toLowerCase().includes(search.toLowerCase()),
    )
  }, [optionToLabel, options, search])

  function handleOptionClick(option: T) {
    setInputValue(option)
    onChange(option)
    setOpen(false)
  }

  const baseClass = 'w-full bg-white placeholder:text-primary-600 font-lato px-3 py-2 rounded-lg focus:outline-0 focus-visible:outline-0'
  const borderClass = error ? 'border-2 border-error-400' : 'border-2 border-primary-100'

  if (loading) {
    Icon = IconLoader2
  } else {
    Icon = open ? IconChevronUp : IconChevronDown
  }

  // Handle outside click to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <div ref={wrapperRef} className="w-full space-y-1">
      <div className="relative w-full">
        <input
          type="text"
          className={`${baseClass} ${borderClass}`}
          placeholder={placeholder}
          value={search}
          onFocus={() => {
            setInputValue(null)
            onChange(null)
            setOpen(true)
          }}
          onChange={e => setSearch(e.target.value)}
        />

        {Icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <Icon className={`w-6 h-6 text-primary-900 ${loading ? 'animate-spin' : ''}`}/>
          </div>
        )}
      </div>

      {open && (
        <ul
          className="absolute w-64 mt-1 max-h-60 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg text-left z-10"
        >
          {filteredOptions.map(option => (
            <li
              key={optionToId(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {optionToLabel(option)}
            </li>
          ))}
        </ul>
      )}

      <div className="text-left px-2">
        {error && <Typography style="caption" className="text-error-400">{error}</Typography>}
      </div>
    </div>
  )
}
