import { useState } from 'react'
import {
  IconCreditCardFilled,
  IconHomeFilled,
  IconSettings,
  IconToolsKitchen2,
} from '@tabler/icons-react'
import { NavTabButton } from '../atoms/NavTabButton'
import { JellyLogoInverted } from '../atoms/svgs/JellyLogoInverted'

type Props = {
  type: 'desktop' | 'mobile'
}

export function Navbar({ type = 'desktop' }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(1)

  const bgStyle = type === 'desktop' ? 'bg-primary-900 top-0' : 'bg-gray-50 bottom-0'

  return (
    <nav className={`flex px-4 justify-between h-16 w-full z-50 shadow-xl ${bgStyle}`}>
      <div className="flex items-center">
        {type === 'desktop' ? <JellyLogoInverted/> : ''}
      </div>

      <div className="flex max-w-[32rem] w-full justify-between">
        <NavTabButton
          type={type}
          text="Home"
          icon={IconHomeFilled}
          selected={selectedIndex === 2}
          onClick={() => setSelectedIndex(2)}
        />

        <NavTabButton
          type={type}
          text="Finance"
          icon={IconCreditCardFilled}
          selected={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
        />

        <NavTabButton
          type={type}
          text="Kitchen"
          icon={IconToolsKitchen2}
          selected={selectedIndex === 3}
          onClick={() => setSelectedIndex(3)}
        />

        <NavTabButton
          type={type}
          text="Settings"
          icon={IconSettings}
          selected={selectedIndex === 4}
          onClick={() => setSelectedIndex(4)}
        />
      </div>
    </nav>
  )
}
