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
  icon: Icon = IconSelector,
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
    ? 'jui-w-full jui-bg-primary-100 jui-text-base jui-font-lato jui-rounded-lg'
    : 'jui-w-full jui-bg-white jui-text-base jui-font-lato jui-rounded-lg'

  const borderClass = error ? 'jui-border-2 jui-border-error-400' : 'jui-border-2 jui-border-primary-100'

  const RightIcon = useMemo(() => {
    if (loading) {
      return IconLoader2
    }

    if (inputValue !== null && !disabled) {
      return IconX
    }

    return Icon
  }, [loading, inputValue, disabled, Icon])

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
    <div ref={wrapperRef} className="jui-w-full jui-space-y-1 jui-relative">
      <div className={`jui-flex jui-w-full ${baseClass} ${borderClass} ${className}`}>
        {searchable ? (
          <input
            name={name}
            type="text"
            className="jui-pl-3 jui-py-2 jui-text-base jui-rounded jui-w-full jui-text-ellipsis jui-overflow-hidden jui-whitespace-nowrap focus:jui-outline-0 focus-visible:jui-outline-0 placeholder:jui-text-primary-600"
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
            className={`jui-pl-3 jui-py-2 jui-rounded jui-w-full jui-text-ellipsis jui-overflow-hidden jui-whitespace-nowrap`}
            onClick={() => {
              if (disabled) return
              setOpen(true)
            }}
          >
            <Typography
              style="body1"
              className={`jui-w-full jui-text-ellipsis jui-overflow-hidden jui-whitespace-nowrap ${inputValue && !open ? 'jui-text-primary-900' : 'jui-text-primary-600'}`}
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

        {RightIcon && (
          <div
            className={`jui-flex jui-items-center jui-pr-2 ${disabled ? '' : 'jui-cursor-pointer'}`}
            onClick={() => {
              if (disabled) return
              setInputValue(null)
              onChange(null)
              setOpen(!open)
            }}
          >
            <RightIcon className={`jui-w-6 jui-h-6 jui-text-primary-900 ${loading ? 'jui-animate-spin' : ''}`}/>
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

      {error !== undefined && (
        <div className="jui-text-left jui-px-2">
          <Typography style="caption" className="jui-text-error-400">
            {error}
          </Typography>
        </div>
      )}
    </div>
  )
}
