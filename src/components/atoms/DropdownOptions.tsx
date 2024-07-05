import React, { useState, useEffect, useRef } from 'react'

type DropdownOptionsProps<T> = {
  selectedOption: T | null
  options: T[]
  optionToId: (option: T) => number | string
  optionToLabel: (option: T) => string
  handleOptionClick: (option: T) => void
  dropdownRef: React.RefObject<HTMLDivElement>
  dropdownPosition: 'bottom' | 'top'
  wrapperRef: React.RefObject<HTMLDivElement>
}

export function DropdownOptions<T>({
  selectedOption,
  options,
  optionToId,
  optionToLabel,
  handleOptionClick,
  dropdownRef,
  dropdownPosition,
  wrapperRef,
}: DropdownOptionsProps<T>) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const optionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (focusedIndex !== null && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.focus()
    }
  }, [focusedIndex])

  useEffect(() => {
    function keydownListener(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        return setFocusedIndex((prevIndex) => {
          if (prevIndex === null) return 0
          if (prevIndex < options.length - 1) return prevIndex + 1
          return 0
        })
      }

      if (event.key === 'ArrowUp') {
        return setFocusedIndex((prevIndex) => {
          if (prevIndex === null || prevIndex < 1) return options.length - 1
          return prevIndex - 1
        })
      }

      if (event.key === 'Enter' && focusedIndex !== null) {
        handleOptionClick(options[focusedIndex])
      }
    }

    window.addEventListener('keydown', keydownListener)
    return () => window.removeEventListener('keydown', keydownListener)
  }, [focusedIndex, handleOptionClick, options])

  function getBorderColour(i: number, option: T): string {
    if (!selectedOption || optionToId(option) !== optionToId(selectedOption)) {
      return i === focusedIndex ? 'border-primary-100' : 'border-white'
    }

    return 'border-primary-900'
  }

  return (
    <div
      ref={dropdownRef}
      className="fixed max-h-44 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg text-left z-50"
      style={{
        top: dropdownPosition === 'top'
          ? (wrapperRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - (dropdownRef.current?.offsetHeight ?? 0)
          : (wrapperRef.current?.getBoundingClientRect().bottom ?? 0) + window.scrollY,
        left: (wrapperRef.current?.getBoundingClientRect().left ?? 0) + window.scrollX,
        width: wrapperRef.current?.offsetWidth,
      }}
      tabIndex={-1}
    >
      {options.map((option, index) => (
        <div
          key={optionToId(option)}
          ref={(el) => (optionRefs.current[index] = el)}
          className={`pl-3 pr-4 py-2 border-l-4 cursor-pointer focus:outline-0 focus-visible:outline-0 ${focusedIndex === index ? 'bg-primary-100' : ''} ${(getBorderColour(index, option))}`}
          onClick={() => handleOptionClick(option)}
          onMouseEnter={() => setFocusedIndex(index)}
          tabIndex={0}
        >
          {optionToLabel(option)}
        </div>
      ))}
    </div>
  )
}
