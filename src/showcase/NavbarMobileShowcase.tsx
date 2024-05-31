import { ComponentType, useState } from 'react'
import { IconAdjustmentsHorizontal, IconHome, IconToolsKitchen2, IconWallet } from '@tabler/icons-react'
import { NavbarMobile } from '../components/organisms/NavbarMobile'

type Tab = {
  text: string
  icon: ComponentType<{ size?: string | number }>
}

export function NavbarMobileShowcase() {
  const tabs: Tab[] = [
    { text: 'home', icon: IconHome },
    { text: 'finance', icon: IconWallet },
    { text: 'kitchen', icon: IconToolsKitchen2 },
    { text: 'settings', icon: IconAdjustmentsHorizontal },
  ]

  const [currentTab, setCurrentTab] = useState(tabs[0])

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 w-full"/>

      <NavbarMobile<Tab>
        value={currentTab}
        tabs={tabs}
        tabToId={tab => tab.text}
        tabToText={tab => tab.text}
        tabToIcon={tab => tab.icon}
        onChange={setCurrentTab}
      />
    </div>
  )
}
