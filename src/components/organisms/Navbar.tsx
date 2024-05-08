import React, { useState } from 'react'
import {
  Icon,
  IconCreditCardFilled,
  IconHomeFilled,
  IconProps,
  IconSettings,
  IconToolsKitchen2,
} from '@tabler/icons-react'
import { NavTabButton } from '../atoms/NavTabButton'
import { JellyLogoInverted } from '../atoms/svgs/JellyLogoInverted'

type Props = {
  type: 'desktop' | 'mobile'
}

export function Navbar({ type = 'desktop' }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const textIconArray: {
    text: string;
    icon: React.ForwardRefExoticComponent<
      Omit<IconProps, 'ref'> & React.RefAttributes<Icon>
    >;
  }[] = [
    { text: 'home', icon: IconHomeFilled },
    { text: 'finance', icon: IconCreditCardFilled },
    { text: 'kitchen', icon: IconToolsKitchen2 },
    { text: 'settings', icon: IconSettings },
  ]

  const bgStyle = type === 'desktop' ? 'bg-primary-900 top-0' : 'bg-gray-50 bottom-0'

  return (
    <nav className={`flex px-4 justify-between h-16 w-full z-50 shadow-xl ${bgStyle}`}>
      <div className="flex items-center">
        {type === 'desktop' ? <JellyLogoInverted/> : ''}
      </div>

      <div className="flex space-x-8">
        {textIconArray.map(({ text, icon }, index) => (
          <NavTabButton
            key={index}
            type="desktop"
            NavIcon={icon}
            text={text}
            selected={selectedIndex === index}
            setSelected={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </nav>
  )
}
