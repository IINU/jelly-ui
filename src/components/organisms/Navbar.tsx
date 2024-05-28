import { useState } from 'react'
import {
  IconAdjustmentsHorizontal,
  IconCreditCard,
  IconHome,
  IconToolsKitchen2,
} from '@tabler/icons-react'
import { NavTabButton } from '../atoms/NavTabButton'

export function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState(1)

  return (
    <nav className="flex px-4 py-2 justify-center h-[4.5rem] w-full z-50 bg-white border-t border-primary-200">
      <div className="flex max-w-[32rem] w-full justify-between items-center">
        <NavTabButton
          text="Home"
          icon={IconHome}
          selected={selectedIndex === 2}
          onClick={() => setSelectedIndex(2)}
        />

        <NavTabButton
          text="finance"
          icon={IconCreditCard}
          selected={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
        />

        <NavTabButton
          text="kitchen"
          icon={IconToolsKitchen2}
          selected={selectedIndex === 3}
          onClick={() => setSelectedIndex(3)}
        />

        <NavTabButton
          text="settings"
          icon={IconAdjustmentsHorizontal}
          selected={selectedIndex === 4}
          onClick={() => setSelectedIndex(4)}
        />
      </div>
    </nav>
  )
}
