import { ComponentType, ReactNode, useState } from 'react'
import { Typography } from '../components/atoms/Typography'
import { NavbarMobile } from '../components/organisms/NavbarMobile'
import { IconAdjustmentsHorizontal, IconHome, IconSelector, IconToolsKitchen2, IconWallet } from '@tabler/icons-react'
import { ProfilePicture } from '../components/atoms/ProfilePicture'
import { Button } from '../components/atoms/Button'

type Tab = {
  text: string
  icon: ComponentType<{ size?: string | number }>
}

type Props = {
  state: 'homescreen' | 'cookbook' | 'title'
  children: ReactNode
}

export function AppLayout({ children, state }: Props) {
  const tabs: Tab[] = [
    { text: 'home', icon: IconHome },
    { text: 'finance', icon: IconWallet },
    { text: 'kitchen', icon: IconToolsKitchen2 },
    { text: 'settings', icon: IconAdjustmentsHorizontal },
  ]

  const [currentTab, setCurrentTab] = useState(tabs[0])

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-16 w-full bg-white shadow-medium flex justify-between px-4 z-10 border-b border-primary-100">
        {state === 'homescreen' && (
          <div className="flex items-center space-x-2 cursor-pointer">
            <IconSelector className="text-secondary-400"/>

            <Typography className="text-secondary-400" style="subtitle1">
              Bun & Done - Bank
            </Typography>
          </div>
        )}

        {state === 'cookbook' && (
          <div className="flex items-center space-x-2">
            <Typography className="text-primary-900" style="h6">
              Cookbook
            </Typography>
          </div>
        )}

        {state === 'title' && (
          <div className="flex items-center space-x-2">
            <Typography className="text-primary-900" style="h6">
              Screen Title
            </Typography>
          </div>
        )}

        <div className="flex items-center">
          {state === 'homescreen' && (
            <ProfilePicture
              src="https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/remy.png"
              className="w-[2.5rem] h-[2.5rem]"
            />
          )}

          {state === 'cookbook' && (
            <Button onClick={() => console.log('Nothing')} style="primary" label="Create"/>
          )}
        </div>
      </div>

      {state === 'cookbook' && (
        <div className="w-full bg-primary-50 flex shadow-medium text-center cursor-pointer">
          <div className="w-full border-b-[3px] border-primary-900 py-3">
            <Typography style="button">Menus</Typography>
          </div>

          <div className="w-full border-b-[3px] border-primary-200 py-3">
            <Typography style="button">Dishes & Recipes</Typography>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto bg-primary-100 flex justify-center">
        <div className="w-full max-w-[56rem]">
          {children}
        </div>
      </div>

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
