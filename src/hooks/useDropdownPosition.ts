import { RefObject, useEffect, useState } from 'react'

export function useDropdownPosition(
  wrapperRef: RefObject<HTMLDivElement>,
  dropdownRef: RefObject<HTMLDivElement>,
  open: boolean,
) {
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom')

  useEffect(() => {
    const updateDropdownPosition = () => {
      if (wrapperRef.current && dropdownRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect()
        const availableSpaceBelow = window.innerHeight - rect.bottom
        const availableSpaceAbove = rect.top

        if (availableSpaceBelow < 200 && availableSpaceAbove > availableSpaceBelow) {
          setDropdownPosition('top')
          dropdownRef.current.style.top = `${rect.top + window.scrollY - dropdownRef.current.offsetHeight}px`
        } else {
          setDropdownPosition('bottom')
          dropdownRef.current.style.top = `${rect.bottom + window.scrollY}px`
        }

        dropdownRef.current.style.left = `${rect.left + window.scrollX}px`
        dropdownRef.current.style.width = `${wrapperRef.current.offsetWidth}px`
      }
    }

    if (open) {
      updateDropdownPosition()
      window.addEventListener('scroll', updateDropdownPosition, true)
      window.addEventListener('resize', updateDropdownPosition)
    }

    return () => {
      window.removeEventListener('scroll', updateDropdownPosition, true)
      window.removeEventListener('resize', updateDropdownPosition)
    }
  }, [open, wrapperRef, dropdownRef])

  return dropdownPosition
}
