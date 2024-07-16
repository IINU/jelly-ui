import React, { useState, useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IconLoader2, IconSelector, IconX } from '@tabler/icons-react'
import { Typography } from './Typography'
import { getOrCreateDivRoot } from '../../utils/utils'
import { useDropdownPosition } from '../../hooks/useDropdownPosition'
import { DropdownOptions } from './DropdownOptions'

type Props<T> = {
  name?: string
  placeholder?: string
  value: T | null
  options: T[]
  optionToId: (option: T) => number | string
  optionToLabel: (option: T) => string
  optionToSearchValue?: (option: T) => string
  onChange: (value: T | null) => void
  error?: string
  loading?: boolean
  icon?: React.ComponentType<{ className?: string }>
  className?: string
  searchable?: boolean
  disabled?: boolean
};

export function DropdownInput<T>({
  name,
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
  className,
  searchable = true,
  disabled = false,
}: Props<T>) {
  if (disabled) {
    searchable = false
  }

  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState<T | null>(value)

  const dropdownRoot = getOrCreateDivRoot('dropdown')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    if (!searchable) return

    if (inputValue) {
      setSearch(
        optionToSearchValue
          ? optionToSearchValue(inputValue)
          : optionToLabel(inputValue),
      )
    } else {
      setSearch('')
    }

    if (open) {
      setSearch('')
    }
  }, [optionToLabel, optionToSearchValue, inputValue, searchable, open])

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

  const baseClass = disabled
    ? 'w-full bg-primary-100 text-base font-lato rounded-lg'
    : 'w-full bg-white text-base font-lato rounded-lg'

  const borderClass = error ? 'border-2 border-error-400' : 'border-2 border-primary-100'

  if (loading) {
    Icon = IconLoader2
  } else if (inputValue !== null && !disabled) {
    Icon = IconX
  } else {
    Icon = IconSelector
  }

  // Handle outside click to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current || !dropdownRef.current) {
        return
      }

      if (!wrapperRef.current.contains(event.target as Node) && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef, dropdownRef])

  if (!dropdownRef.current) {
    dropdownRef.current = document.createElement('div')
  }

  useEffect(() => {
    const el = dropdownRef.current!
    dropdownRoot.appendChild(el)
    return () => {
      dropdownRoot.removeChild(el)
    }
  }, [dropdownRoot])

  const dropdownPosition = useDropdownPosition(wrapperRef, dropdownRef, open)

  return (
    <div ref={wrapperRef} className="w-full space-y-1 relative">
      <div className={`flex w-full ${baseClass} ${borderClass} ${className}`}>
        {searchable ? (
          <input
            name={name}
            type="text"
            className="pl-3 py-2 rounded w-full text-ellipsis overflow-hidden whitespace-nowrap focus:outline-0 focus-visible:outline-0 placeholder:text-primary-600"
            placeholder={placeholder}
            value={search}
            onFocus={() => {
              if (disabled) return
              setOpen(true)
            }}
            onChange={e => setSearch(e.target.value)}
          />
        ) : (
          <div
            className={`pl-3 py-2 rounded w-full text-ellipsis overflow-hidden whitespace-nowrap`}
            onClick={() => {
              if (disabled) return
              setOpen(true)
            }}
          >
            <Typography
              style="body1"
              className={`w-full text-ellipsis overflow-hidden whitespace-nowrap ${inputValue && !open ? 'text-primary-900' : 'text-primary-600'}`}
            >
              {
                inputValue && !open
                  ? (
                    optionToSearchValue
                      ? optionToSearchValue(inputValue)
                      : optionToLabel(inputValue)
                  )
                  : placeholder
              }
            </Typography>
          </div>
        )}

        {Icon && (
          <div
            className={`flex items-center pr-2 ${disabled ? '' : 'cursor-pointer'}`}
            onClick={() => {
              if (disabled) return
              setInputValue(null)
              onChange(null)
              setOpen(!open)
            }}
          >
            <Icon className={`w-6 h-6 text-primary-900 ${loading ? 'animate-spin' : ''}`}/>
          </div>
        )}
      </div>

      {open && createPortal(
        <DropdownOptions<T>
          selectedOption={inputValue}
          options={filteredOptions}
          optionToId={optionToId}
          optionToLabel={optionToLabel}
          handleOptionClick={handleOptionClick}
          dropdownRef={dropdownRef}
          dropdownPosition={dropdownPosition}
          wrapperRef={wrapperRef}
        />,
        dropdownRoot,
      )}

      {error && (
        <div className="text-left px-2">
          <Typography style="caption" className="text-error-400">
            {error}
          </Typography>
        </div>
      )}
    </div>
  )
}
