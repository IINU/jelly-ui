import { ComponentType, ReactNode, useState } from 'react'
import { Typography } from '../components/atoms/Typography'
import { NavbarMobile } from '../components/organisms/NavbarMobile'
import {
  IconAdjustmentsHorizontal,
  IconArrowLeft,
  IconHome,
  IconSelector,
  IconToolsKitchen2,
  IconWallet,
} from '@tabler/icons-react'
import { ProfilePicture } from '../components/atoms/ProfilePicture'
import { Button } from '../components/atoms/Button'

type NavButton = {
  text: string
  icon: ComponentType<{ size?: string | number }>
}

type Props = {
  title?: string
  tabs?: string[]
  activeTab?: number
  actionButton?: string
  actionClick?: () => void
  state: 'homescreen' | 'backscreen' | 'tabbed' | 'title'
  children: ReactNode
}

export function AppLayout({
  title,
  children,
  state,
  tabs = ['Menus', 'Dishes & Recipes'],
  activeTab = 0,
  actionButton,
  actionClick,
}: Props) {
  const navButtons: NavButton[] = [
    { text: 'home', icon: IconHome },
    { text: 'finance', icon: IconWallet },
    { text: 'kitchen', icon: IconToolsKitchen2 },
    { text: 'settings', icon: IconAdjustmentsHorizontal },
  ]

  const [currentNavButton, setCurrentNavButton] = useState(navButtons[0])

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-16 w-full bg-white flex justify-between px-4 border-b border-primary-200">
        {state === 'homescreen' && (
          <div className="flex items-center space-x-2 cursor-pointer">
            <IconSelector className="text-secondary-400"/>

            <div>
              {title && (
                <Typography className="text-primary-900" style="subtitle1">
                  {title}
                </Typography>
              )}

              <Typography className="text-secondary-400" style="subtitle1">
                Soho London
              </Typography>
            </div>
          </div>
        )}

        {state === 'backscreen' && (
          <div className="flex items-center space-x-1 cursor-pointer">
            <IconArrowLeft className="text-primary-900"/>

            <Typography className="text-primary-900" style="subtitle1">
              {title}
            </Typography>
          </div>
        )}

        {state === 'tabbed' && (
          <div className="flex items-center space-x-2">
            <Typography className="text-primary-900" style="h6">
              {title || 'Cookbook'}
            </Typography>
          </div>
        )}

        {state === 'title' && (
          <div className="flex items-center space-x-2">
            <Typography className="text-primary-900" style="h6">
              {title || 'Screen Title'}
            </Typography>
          </div>
        )}

        <div className="flex items-center">
          {state === 'homescreen' && !actionButton && (
            <ProfilePicture
              src="https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/remy.png"
              className="w-[2.5rem] h-[2.5rem]"
            />
          )}

          {actionButton && (
            <Button
              onClick={() => actionClick?.()}
              style="primary"
              label={actionButton}
            />
          )}
        </div>
      </div>

      {state === 'tabbed' && (
        <div className="w-full bg-primary-50 flex shadow-medium text-center cursor-pointer">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`w-full border-b-[3px] py-3 ${index === activeTab ? 'border-primary-900' : 'border-primary-200'}`}
            >
              <Typography style="button">{tab}</Typography>
            </div>
          ))}
        </div>
      )}

      <div id="second-nav"></div>

      <div className="flex-1 overflow-y-auto bg-primary-50 flex justify-center">
        <div className="w-full max-w-[56rem]">
          {children}
        </div>
      </div>

      <NavbarMobile<NavButton>
        value={currentNavButton}
        tabs={navButtons}
        tabToId={tab => tab.text}
        tabToText={tab => tab.text}
        tabToIcon={tab => tab.icon}
        onChange={setCurrentNavButton}
      />
    </div>
  )
}
