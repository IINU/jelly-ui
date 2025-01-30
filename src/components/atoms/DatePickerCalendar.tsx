import React, { useEffect, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import {
  addDays,
  addMonths,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import { Typography } from './Typography'

type Props = {
  calendarRef: React.RefObject<HTMLDivElement>
  wrapperRef: React.RefObject<HTMLDivElement>
  dropdownPosition: 'bottom' | 'top'
  selectedDate: Date | null
  onDateChange: (date: Date) => void
}

export function DatePickerCalendar({
  calendarRef,
  wrapperRef,
  dropdownPosition,
  selectedDate,
  onDateChange,
}: Props) {
  // The month we are currently displaying
  const [displayMonth, setDisplayMonth] = useState<Date>(
    selectedDate || new Date(),
  )

  // Whenever `selectedDate` changes externally, update displayMonth
  useEffect(() => {
    if (selectedDate) {
      setDisplayMonth(selectedDate)
    }
  }, [selectedDate])

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

  // The header label: e.g. "March 2025"
  const headerLabel = format(displayMonth, 'MMMM yyyy')

  const navClass = 'jui-p-2 jui-border-2 jui-border-gray-200 jui-rounded-full hover:jui-bg-gray-200 jui-cursor-pointer'

  return (
    <div
      ref={calendarRef}
      className="jui-fixed jui-bg-white jui-rounded-md jui-shadow-lg jui-text-left jui-z-50 jui-p-3 jui-space-y-3"
      style={{
        top: dropdownPosition === 'top'
          ? (wrapperRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - (calendarRef.current?.offsetHeight ?? 0)
          : (wrapperRef.current?.getBoundingClientRect().bottom ?? 0) + window.scrollY,
        left: (wrapperRef.current?.getBoundingClientRect().left ?? 0) + window.scrollX,
        width: wrapperRef.current?.offsetWidth,
      }}
      tabIndex={-1}
    >
      {/* Header / Navigation */}
      <div className="jui-flex jui-justify-between jui-items-center jui-py-1">
        <div className={navClass} onClick={prevMonth}>
          <IconChevronLeft className="jui-text-primary-900" />
        </div>

        <Typography style="body1" className="jui-font-semibold jui-text-primary-900">
          {headerLabel}
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
              onClick={() => onDateChange(day)}
              className={`jui-text-center jui-py-2 jui-rounded jui-cursor-pointer ${textColour} ${selectedClass}`}
            >
              {format(day, 'd')}
            </div>
          )
        })}
      </div>
    </div>
  )
}
