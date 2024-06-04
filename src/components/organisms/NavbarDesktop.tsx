import { ComponentType } from 'react'
import { NavBarButtonDesktop } from '../atoms/NavBarButtonDesktop'
import { JellyLogoInverted } from '../atoms/svgs/JellyLogoInverted'

type Props<T> = {
  value: T
  tabs: T[]
  tabToId: (option: T) => number | string
  tabToText: (option: T) => string
  tabToIcon: (option: T) => ComponentType<{ size?: string | number }>
  onChange: (value: T) => void
}

export function NavbarDesktop<T>(
  { tabs, value, onChange, tabToId, tabToText, tabToIcon }: Props<T>,
) {
  return (
    <div
      className="flex justify-center h-16 bg-primary-900 z-10 shadow-medium"
    >
      <div className="max-w-[56rem] w-full flex items-center justify-between">
        <JellyLogoInverted/>

        <div className="flex justify-between max-w-[32rem] w-full">
          {tabs.map(tab => (
            <NavBarButtonDesktop
              key={tabToId(tab)}
              text={tabToText(tab)}
              icon={tabToIcon(tab)}
              active={tabToId(tab) === tabToId(value)}
              onClick={() => onChange(tab)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
