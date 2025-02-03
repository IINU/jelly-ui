import { ComponentType, useCallback, useEffect, useRef, useState } from 'react'
import { addDays, addMonths, format, isSameDay, isSameMonth, startOfMonth, startOfWeek } from 'date-fns'
import { IconCalendarMonth, IconChevronLeft, IconChevronRight, IconLoader2, IconX } from '@tabler/icons-react'
import { Typography } from './Typography'
import { Modal } from './Modal'

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
}: DateInputProps) {
  const [open, setOpen] = useState(false)

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

  // The month we are currently displaying
  const [displayMonth, setDisplayMonth] = useState<Date>(
    selectedDate || new Date(),
  )

  // Build the 6-row matrix of days for the month in displayMonth
  const buildCalendarGrid = () => {
    // 1) Get the first Monday of the month (or whichever `weekStartsOn` you need).
    const startOfCurrentMonth = startOfMonth(displayMonth)
    const calendarStart = startOfWeek(startOfCurrentMonth, { weekStartsOn: 1 })

    // 2) Build a fixed 6-week array of days => 42 days.
    const days: Date[] = []
    for (let i = 0; i < 42; i++) {
      days.push(addDays(calendarStart, i))
    }

    return days
  }

  const days = buildCalendarGrid()

  // Handlers
  const prevMonth = () => {
    setDisplayMonth(m => addMonths(m, -1))
  }
  const nextMonth = () => {
    setDisplayMonth(m => addMonths(m, 1))
  }

  const navClass = 'jui-p-2 jui-border-2 jui-border-gray-200 jui-rounded-full hover:jui-bg-gray-200 jui-cursor-pointer'

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)} hideCloseButton>
        <div className="jui-space-y-3">
          {/* Header / Navigation */}
          <div className="jui-flex jui-justify-between jui-items-center jui-py-1">
            <div className={navClass} onClick={prevMonth}>
              <IconChevronLeft className="jui-text-primary-900" />
            </div>

            <Typography style="body1" className="jui-font-semibold jui-text-primary-900">
              {format(displayMonth, 'MMMM yyyy')}
            </Typography>

            <div className={navClass} onClick={nextMonth}>
              <IconChevronRight className="jui-text-primary-900" />
            </div>
          </div>

          {/* Day of week labels */}
          <div className="jui-grid jui-grid-cols-7 jui-gap-1">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(dow => (
              <div key={dow} className="jui-text-center jui-font-semibold jui-text-xs jui-text-primary-700">
                {dow}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="jui-grid jui-grid-cols-7 jui-gap-1">
            {days.map((day, idx) => {
              const isCurrentMonth = isSameMonth(day, displayMonth)
              const isSelected = selectedDate && isSameDay(day, selectedDate)

              const textColour = isCurrentMonth
                ? isSelected ? 'jui-text-white' : 'jui-text-primary-900'
                : 'jui-text-primary-200';

              const selectedClass = isSelected
                ? 'jui-bg-primary-900 jui-font-semibold'
                : 'hover:jui-bg-primary-50'

              return (
                <div
                  key={idx}
                  onClick={() => handleDateChange(day)}
                  className={`jui-text-center jui-py-2 jui-rounded jui-cursor-pointer ${textColour} ${selectedClass}`}
                >
                  {format(day, 'd')}
                </div>
              )
            })}
          </div>
        </div>
      </Modal>

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
              <p>{format(selectedDate, 'dd/MM/yyyy')}</p>
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

        {/* Show Error */}
        {error && (
          <div className="jui-text-left jui-px-2">
            <Typography style="caption" className="jui-text-error-400">
              {error}
            </Typography>
          </div>
        )}
      </div>
    </>
  )
}
