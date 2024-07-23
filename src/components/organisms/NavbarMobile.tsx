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
      className="jui-w-full jui-bg-white jui-flex jui-items-center jui-justify-center jui-z-10 jui-border-t jui-border-primary-200 jui-shadow-medium jui-pb-safe"
    >
      <div className="jui-flex jui-justify-between jui-max-w-[32rem] jui-w-full jui-py-2.5">
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
