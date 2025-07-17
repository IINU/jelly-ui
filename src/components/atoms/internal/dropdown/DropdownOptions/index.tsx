import {useState, useEffect, useRef } from 'react'
import {Typography} from '../../../Typography'
import { DropdownOptionsProps } from './types'
import { getAbsolutePositioning } from './helpers/getAbsolutePositioning'
import { DropdownOptionItem } from './DropdownOptionItem'


export function DropdownOptions<T>({
  selectedOption,
  options,
  optionToId,
  optionToLabel,
  handleOptionClick,
  dropdownRef,
  dropdownPosition,
  wrapperRef,
  errorRef,
  dropdownStatusContent,
  optionsBottomContent,
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
      return i === focusedIndex ? 'jui-border-primary-100' : 'jui-border-white'
    }

    return 'jui-border-primary-900'
  }

  return (
    <div
      ref={dropdownRef}
      className="jui-fixed jui-max-h-44 jui-overflow-y-auto jui-bg-white jui-rounded-md jui-shadow-lg jui-text-left jui-z-50"
      style={{
        ...getAbsolutePositioning({ dropdownPosition, dropdownRef,dropdownStatusContent, wrapperRef, errorRef })
      }}
      tabIndex={-1}
    >
      {dropdownStatusContent ?? (
        <>
          {options.map((option, index) => (
            <DropdownOptionItem
              key={optionToId(option)}
              ref={(el) => (optionRefs.current[index] = el)}
              className={`jui-cursor-pointer focus:jui-outline-0 focus-visible:jui-outline-0 ${focusedIndex === index ? 'jui-bg-primary-100' : ''} ${(getBorderColour(index, option))}`}
              onClick={() => handleOptionClick(option)}
              onMouseEnter={() => setFocusedIndex(index)}
              tabIndex={0}
            >
              <Typography style="body1">
                {optionToLabel(option)}
              </Typography>
            </DropdownOptionItem>
          ))}
          <div className={`jui-cursor-pointer focus:jui-outline-0 focus-visible:jui-outline-0 jui-bg-primary-100`}>
          {optionsBottomContent}
          </div>
        </>
      )}
    </div>
  )
}