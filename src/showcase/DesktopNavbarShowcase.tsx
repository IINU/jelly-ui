import { ComponentType, useState } from 'react'
import { IconAdjustmentsHorizontal, IconHome, IconToolsKitchen2, IconWallet } from '@tabler/icons-react'
import { NavbarDesktop } from '../components/organisms/NavbarDesktop'

type Tab = {
  text: string
  icon: ComponentType<{ size?: string | number }>
}

export function DesktopNavbarShowcase() {
  const tabs: Tab[] = [
    { text: 'home', icon: IconHome },
    { text: 'finance', icon: IconWallet },
    { text: 'kitchen', icon: IconToolsKitchen2 },
    { text: 'settings', icon: IconAdjustmentsHorizontal },
  ]

  const [currentTab, setCurrentTab] = useState(tabs[0])

  return (
    <div className="jui-flex jui-flex-col jui-h-full">
      <NavbarDesktop<Tab>
        value={currentTab}
        tabs={tabs}
        tabToId={tab => tab.text}
        tabToText={tab => tab.text}
        tabToIcon={tab => tab.icon}
        onChange={setCurrentTab}
      />

      <div className="jui-flex-1 jui-w-full"/>
    </div>
  )
}
