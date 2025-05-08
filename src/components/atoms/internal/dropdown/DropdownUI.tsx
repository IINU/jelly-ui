import {useEffect, useMemo, useRef, useState} from 'react'
import { createPortal } from 'react-dom'
import { IconLoader2, IconSelector, IconX } from '@tabler/icons-react'
import {getOrCreateDivRoot} from "../../../../utils/utils";
import {Typography} from "../../Typography";
import {DropdownOptions} from "../../DropdownOptions";
import {BaseDropdownProps} from "./dropdown.types";
import {useDropdownPosition} from "../../../../hooks/useDropdownPosition";

type Props<T> = BaseDropdownProps<T> & {
  searchable: boolean
  search: string
  handleSearchChange: (search: string) => void
  options: T[]
  dropdownStatusText?: string
  open: boolean
  setOpen: (open: boolean) => void
  loading: boolean
}

export function DropdownUI<T>({
  name,
  placeholder,
  value,
  optionToId,
  optionToLabel,
  optionToSearchValue,
  onChange,
  error,
  icon: Icon = IconSelector,
  className,
  searchable,
  disabled = false,
  search,
  handleSearchChange,
  dropdownStatusText,
  options,
  loading,
  open,
  setOpen,
}: Props<T>) {
  if (disabled) {
    searchable = false
  }

  const [selectedValue, setSelectedValue] = useState<T | null>(value)
  const dropdownRoot = getOrCreateDivRoot('dropdown')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  function handleOptionClick(option: T) {
    setSelectedValue(option)
    onChange(option)
    setOpen(false)
  }

  const baseClass = disabled
    ? 'jui-w-full jui-bg-primary-100 jui-text-base jui-font-lato jui-rounded-lg'
    : 'jui-w-full jui-bg-white jui-text-base jui-font-lato jui-rounded-lg'

  const borderClass = error !== undefined
    ? 'jui-border-2 jui-border-error-400'
    : 'jui-border-2 jui-border-primary-100'

  const RightIcon = useMemo(() => {
    if (loading) {
      return IconLoader2
    }

    if (selectedValue !== null && !disabled) {
      return IconX
    }

    return Icon
  }, [loading, selectedValue, disabled, Icon])

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
  }, [wrapperRef, dropdownRef, setOpen])

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
            autoComplete="off"
            value={open ? search
              : (selectedValue ? optionToLabel(selectedValue) : '')}
            onFocus={() => {
              if (disabled) return
              setOpen(true)
            }}
            onChange={e => handleSearchChange(e.target.value)}
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
              className={`jui-w-full jui-text-ellipsis jui-overflow-hidden jui-whitespace-nowrap ${selectedValue && !open ? 'jui-text-primary-900' : 'jui-text-primary-600'}`}
            >
              {
                selectedValue && !open
                  ? (
                    optionToSearchValue
                      ? optionToSearchValue(selectedValue)
                      : optionToLabel(selectedValue)
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
              setSelectedValue(null)
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
          selectedOption={selectedValue}
          options={options}
          optionToId={optionToId}
          optionToLabel={optionToLabel}
          handleOptionClick={handleOptionClick}
          dropdownRef={dropdownRef}
          dropdownPosition={dropdownPosition}
          wrapperRef={wrapperRef}
          dropdownStatusText={dropdownStatusText}
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