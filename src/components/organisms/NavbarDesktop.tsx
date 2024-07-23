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
      className="jui-flex jui-justify-center jui-h-16 jui-bg-primary-900 jui-z-10 jui-shadow-medium"
    >
      <div className="jui-max-w-[56rem] jui-w-full jui-flex jui-items-center jui-justify-between">
        <JellyLogoInverted/>

        <div className="jui-flex jui-justify-between jui-max-w-[32rem] jui-w-full">
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
