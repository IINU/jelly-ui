import { ComponentType } from 'react'
import { NavBarButton } from '../atoms/NavBarButton'

type Props<T> = {
  value: T
  tabs: T[]
  tabToId: (option: T) => number | string
  tabToText: (option: T) => string
  tabToIcon: (option: T) => ComponentType<{ size?: string | number }>
  onChange: (value: T) => void
}

export function NavbarMobile<T>(
  { tabs, value, onChange, tabToId, tabToText, tabToIcon }: Props<T>,
) {
  return (
    <div
      className="h-[5.25rem] w-full bg-white flex items-center justify-center z-10 border-t border-primary-200 shadow-medium"
    >
      <div className="flex justify-between max-w-[32rem] w-full mb-2">
        {tabs.map(tab => (
          <NavBarButton
            key={tabToId(tab)}
            text={tabToText(tab)}
            icon={tabToIcon(tab)}
            active={tabToId(tab) === tabToId(value)}
            onClick={() => onChange(tab)}
          />
        ))}
      </div>
    </div>
  )
}
