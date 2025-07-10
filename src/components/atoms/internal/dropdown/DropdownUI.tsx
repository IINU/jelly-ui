import { useEffect, useMemo, useRef, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { IconLoader2, IconSelector, IconX } from '@tabler/icons-react'
import { Typography } from "../../Typography";
import { DropdownOptions } from "./DropdownOptions";
import { BaseDropdownProps } from "./dropdown.types";
import { useDropdownPosition } from "../../../../hooks/useDropdownPosition";
import { getOrCreateDivRoot } from '../../../../utils/utils';

type Props<T> = BaseDropdownProps<T> & {
  searchable: boolean
  search: string
  onSearchInputChange: (search: string) => void
  onFocus: () => void
  options: T[]
  dropdownStatusContent?: ReactNode
  optionsBottomContent?: ReactNode
  showErrorMessage?: boolean
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
  onFocus,
  error,
  icon: Icon = IconSelector,
  className,
  searchable,
  disabled = false,
  showErrorMessage = true,
  search,
  onSearchInputChange,
  dropdownStatusContent,
  options,
  loading,
  open,
  setOpen,
  optionsBottomContent,
}: Props<T>) {
  if (disabled) {
    searchable = false
  }

  const [selectedValue, setSelectedValue] = useState<T | null>(value)
  const displayValue = useMemo(() => {
    if (open || !selectedValue) {
      return searchable ? search : placeholder
    }
    const result = optionToSearchValue
      ? optionToSearchValue(selectedValue)
      : optionToLabel(selectedValue)

      return result
  }, [open, optionToLabel, optionToSearchValue, placeholder, search, searchable, selectedValue])

  const dropdownRoot = getOrCreateDivRoot('dropdown')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const errorContainerRef = useRef<HTMLDivElement | null>(null)
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

  const inputClass = 'jui-pl-3 jui-py-2 jui-min-h-[2.5rem] jui-rounded jui-flex-1 jui-w-full'

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

  const dropdownPosition = useDropdownPosition(wrapperRef, dropdownRef, open)

  return (
    <div ref={wrapperRef} className="jui-w-full jui-space-y-1 jui-relative">
      <div className={`jui-flex ${baseClass} ${borderClass} ${className}`}>
        {searchable ? (
          <input
            name={name}
            type="text"
            className={`${inputClass} jui-truncate jui-text-base focus:jui-outline-0 focus-visible:jui-outline-0 placeholder:jui-text-primary-600`}
            placeholder={placeholder}
            autoComplete="off"
            value={displayValue}
            onFocus={() => {
              if (disabled) return

              onFocus()
            }}
            onChange={e => onSearchInputChange(e.target.value)} // rename into onSearchInputChange
          />
        ) : (
          <div
            className={`${inputClass} jui-flex jui-items-center`}
            onClick={() => {
              if (disabled) return
              setOpen(true)
            }}
          >
            <Typography
              style="body1"
              className={`jui-truncate ${selectedValue && !open ? 'jui-text-primary-900' : 'jui-text-primary-600'}`}
            >
              {displayValue}
            </Typography>
          </div>
        )}

        {RightIcon && (
          <div
            className={`jui-flex jui-items-center jui-pr-2 ${disabled ? '' : 'jui-cursor-pointer'}`}
            onClick={() => {
              if (disabled) {
                return
              }

              if (selectedValue){
                setSelectedValue(null)
                onChange(null)
              }

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
          errorRef={errorContainerRef}
          dropdownStatusContent={dropdownStatusContent}
          optionsBottomContent={optionsBottomContent}
        />,
        dropdownRoot,
      )}

      {error !== undefined && showErrorMessage && (
        <div ref={errorContainerRef} className="jui-text-left jui-px-2">
          <Typography style="caption" className="jui-text-error-400">
            {error}
          </Typography>
        </div>
      )}
    </div>
  )
}