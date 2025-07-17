import { FC, HTMLProps, forwardRef } from 'react'

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

export { DropdownOptionItem }