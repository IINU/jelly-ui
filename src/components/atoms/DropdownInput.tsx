import React, { useState, useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IconChevronDown, IconChevronUp, IconLoader2 } from '@tabler/icons-react'
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
}: Props<T>) {
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
    if (inputValue) {
      setSearch(
        optionToSearchValue
          ? optionToSearchValue(inputValue)
          : optionToLabel(inputValue),
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

  const baseClass = 'w-full bg-white placeholder:text-primary-600 text-base font-lato rounded-lg'
  const borderClass = error ? 'border-2 border-error-400' : 'border-2 border-primary-100'

  if (loading) {
    Icon = IconLoader2
  } else {
    Icon = open ? IconChevronUp : IconChevronDown
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
            className="pl-3 py-2 rounded w-full text-ellipsis overflow-hidden whitespace-nowrap focus:outline-0 focus-visible:outline-0"
            placeholder={placeholder}
            value={search}
            onFocus={() => {
              setInputValue(null)
              onChange(null)
              setOpen(true)
            }}
            onChange={e => setSearch(e.target.value)}
          />
        ) : (
          <div
            className={`pl-3 py-2 rounded w-full text-ellipsis overflow-hidden whitespace-nowrap`}
            onClick={() => {
              setInputValue(null)
              onChange(null)
              setOpen(true)
            }}
          >
            <Typography
              style="body1"
              className={`w-full text-ellipsis overflow-hidden whitespace-nowrap ${search ? 'text-primary-900' : 'text-primary-600'}`}
            >
              {search || placeholder}
            </Typography>
          </div>
        )}

        {Icon && (
          <div
            className="flex items-center px-1.5 cursor-pointer"
            onClick={() => {
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
