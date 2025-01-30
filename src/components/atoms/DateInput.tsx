import { ComponentType, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { format } from 'date-fns'
import { IconCalendarMonth, IconLoader2, IconX } from '@tabler/icons-react'
import { Typography } from './Typography'
import { getOrCreateDivRoot } from '../../utils/utils'
import { useDropdownPosition } from '../../hooks/useDropdownPosition'
import { DatePickerCalendar } from './DatePickerCalendar'

type DateInputProps = {
  name?: string
  placeholder?: string
  value: Date | null
  onChange: (value: Date | null) => void
  error?: string
  loading?: boolean
  icon?: ComponentType<{ className?: string }>
  className?: string
  disabled?: boolean
  /** Date format to display in the input field. Defaults to 'MM/dd/yyyy' */
  displayFormat?: string
}

export function DateInput({
  placeholder = 'Select date',
  value,
  onChange,
  error,
  loading = false,
  icon: Icon = IconCalendarMonth,
  className,
  disabled = false,
  displayFormat = 'dd/MM/yyyy',
}: DateInputProps) {
  const [open, setOpen] = useState(false)
  const calendarRoot = getOrCreateDivRoot('date')

  const wrapperRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement | null>(null)

  // Keep local copy of date to show correct month in calendar
  const [selectedDate, setSelectedDate] = useState<Date | null>(value)

  // Keep inputValue up to date when `value` changes externally
  useEffect(() => setSelectedDate(value), [value])

  // Build our container if it doesn't exist
  if (!calendarRef.current) {
    calendarRef.current = document.createElement('div')
  }

  // Attach/detach the element from the root
  useEffect(() => {
    const el = calendarRef.current!
    calendarRoot.appendChild(el)
    return () => {
      calendarRoot.removeChild(el)
    }
  }, [calendarRoot])

  // Position logic
  const dropdownPosition = useDropdownPosition(wrapperRef, calendarRef, open, 400)

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current || !calendarRef.current) return
      if (
        !wrapperRef.current.contains(e.target as Node) &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handler when a date is clicked in the calendar
  const handleDateChange = useCallback(
    (date: Date) => {
      setSelectedDate(date)
      onChange(date)
      setOpen(false)
    },
    [onChange],
  )

  const baseClass = disabled
    ? 'jui-w-full jui-bg-primary-100 jui-text-base jui-font-lato jui-rounded-lg'
    : 'jui-w-full jui-bg-white jui-text-base jui-font-lato jui-rounded-lg'

  const borderClass = error
    ? 'jui-border-2 jui-border-error-400'
    : 'jui-border-2 jui-border-primary-100'

  // Decide which icon to show on the right
  let RightIcon = Icon
  if (loading) {
    RightIcon = IconLoader2
  } else if (selectedDate && !disabled) {
    RightIcon = IconX
  }

  return (
    <div ref={wrapperRef} className="jui-w-full jui-space-y-1 jui-relative">
      {/* Input Field */}
      <div className={`jui-flex jui-w-full ${baseClass} ${borderClass} ${className}`}>
        <div
          className="jui-pl-3 jui-py-2 jui-text-base jui-rounded jui-w-full jui-text-ellipsis jui-overflow-hidden jui-whitespace-nowrap"
          onClick={() => {
            if (!disabled) setOpen(true)
          }}
        >
          {selectedDate ? (
            <p>{format(selectedDate, displayFormat)}</p>
          ) : (
            <p className="jui-text-primary-600">{placeholder}</p>
          )}
        </div>

        {/* Right icon click behavior */}
        <div
          className={`jui-flex jui-items-center jui-pr-2 ${
            disabled ? '' : 'jui-cursor-pointer'
          }`}
          onClick={() => {
            if (disabled) return
            if (selectedDate) {
              // Clear
              setSelectedDate(null)
              onChange(null)
            } else {
              // Open calendar
              setOpen(true)
            }
          }}
        >
          <RightIcon
            className={`jui-w-6 jui-h-6 jui-text-primary-900 ${
              loading ? 'jui-animate-spin' : ''
            }`}
          />
        </div>
      </div>

      {/* The Calendar Portal */}
      {open && createPortal(
        <DatePickerCalendar
          calendarRef={calendarRef}
          wrapperRef={wrapperRef}
          dropdownPosition={dropdownPosition}
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />,
        calendarRoot,
      )}

      {/* Show Error */}
      {error && (
        <div className="jui-text-left jui-px-2">
          <Typography style="caption" className="jui-text-error-400">
            {error}
          </Typography>
        </div>
      )}
    </div>
  )
}
