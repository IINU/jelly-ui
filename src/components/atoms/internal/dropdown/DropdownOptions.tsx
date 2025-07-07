import {useState, useEffect, useRef, FC, HTMLProps, forwardRef, RefObject, ReactNode} from 'react'
import {Typography} from '../../Typography'

type DropdownOptionsProps<T> = {
  selectedOption: T | null
  options: T[]
  optionToId: (option: T) => number | string
  optionToLabel: (option: T) => string
  handleOptionClick: (option: T) => void
  dropdownRef: RefObject<HTMLDivElement>
  dropdownPosition: 'bottom' | 'top'
  wrapperRef: RefObject<HTMLDivElement>
  dropdownStatusContent?: ReactNode
  optionsBottomContent?: ReactNode
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
  dropdownStatusContent,
  optionsBottomContent,
}: DropdownOptionsProps<T>) {
  console.log('dropdownOptions :>> ', JSON.stringify({
      selectedOption,
      options,
      dropdownPosition,
  }));
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
        top: dropdownPosition === 'top'
          ? (wrapperRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - (dropdownRef.current?.offsetHeight ?? 0)
          : (wrapperRef.current?.getBoundingClientRect().bottom ?? 0) + window.scrollY,
        left: (wrapperRef.current?.getBoundingClientRect().left ?? 0) + window.scrollX,
        width: wrapperRef.current?.offsetWidth,
      }}
      tabIndex={-1}
    >
      {dropdownStatusContent
        ? <DropdownOptionItem>
          {typeof dropdownStatusContent === 'string' ? (
            <Typography style="body1" className="jui-text-primary-600">
              {dropdownStatusContent}
            </Typography>
          ) : dropdownStatusContent}
        </DropdownOptionItem>
        : <>
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
          {options.length ? optionsBottomContent : null}
        </>}
    </div>
  )
}

const DropdownOptionItem: FC<HTMLProps<HTMLDivElement>> = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({children, className, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={`jui-pl-3 jui-pr-4 jui-py-2 jui-border-l-4 ${className ?? ''}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DropdownOptionItem.displayName = 'DropdownOptionItem'