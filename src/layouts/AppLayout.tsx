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
  hideNav?: boolean
  bottomContent?: ReactNode
}

export function AppLayout({
  title,
  children,
  state,
  tabs = ['Menus', 'Dishes & Recipes'],
  activeTab = 0,
  actionButton,
  actionClick,
  hideNav = false,
  bottomContent,
}: Props) {
  const navButtons: NavButton[] = [
    { text: 'home', icon: IconHome },
    { text: 'finance', icon: IconWallet },
    { text: 'kitchen', icon: IconToolsKitchen2 },
    { text: 'settings', icon: IconAdjustmentsHorizontal },
  ]

  const [currentNavButton, setCurrentNavButton] = useState(navButtons[0])

  return (
    <div className="jui-w-full jui-h-full jui-flex jui-flex-col">
      <div className="jui-h-16 jui-w-full jui-bg-white jui-flex jui-justify-between jui-px-4 jui-border-b jui-border-primary-200">
        {state === 'homescreen' && (
          <div className="jui-flex jui-items-center jui-space-x-2 jui-cursor-pointer">
            <IconSelector className="jui-text-secondary-400"/>

            <div>
              {title && (
                <Typography className="jui-text-primary-900" style="subtitle1">
                  {title}
                </Typography>
              )}

              <Typography className="jui-text-secondary-400" style="subtitle1">
                Soho London
              </Typography>
            </div>
          </div>
        )}

        {state === 'backscreen' && (
          <div className="jui-flex jui-items-center jui-space-x-1 jui-cursor-pointer">
            <IconArrowLeft className="jui-text-primary-900"/>

            <Typography className="jui-text-primary-900" style="subtitle1">
              {title}
            </Typography>
          </div>
        )}

        {state === 'tabbed' && (
          <div className="jui-flex jui-items-center jui-space-x-2">
            <Typography className="jui-text-primary-900" style="h6">
              {title || 'Cookbook'}
            </Typography>
          </div>
        )}

        {state === 'title' && (
          <div className="jui-flex jui-items-center jui-space-x-2">
            <Typography className="jui-text-primary-900" style="h6">
              {title || 'Screen Title'}
            </Typography>
          </div>
        )}

        <div className="jui-flex jui-items-center">
          {state === 'homescreen' && !actionButton && (
            <ProfilePicture
              src="https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/remy.png"
              className="!jui-w-[2.5rem] !jui-h-[2.5rem]"
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
        <div className="jui-w-full jui-bg-primary-50 jui-flex jui-shadow-medium jui-text-center jui-cursor-pointer">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`jui-w-full jui-border-b-[3px] jui-py-3 ${index === activeTab ? 'jui-border-primary-900' : 'jui-border-primary-200'}`}
            >
              <Typography style="button">{tab}</Typography>
            </div>
          ))}
        </div>
      )}

      <div id="second-nav"></div>

      <div className="jui-flex-1 jui-overflow-y-auto jui-bg-primary-50 jui-flex jui-justify-center">
        <div className="jui-w-full jui-max-w-[56rem]">
          {children}
        </div>
      </div>

      {!!bottomContent && (
        <div className="jui-py-4 jui-px-2 jui-space-x-2 jui-flex jui-border-t jui-border-primary-200 jui-bg-white">
          {bottomContent}
        </div>
      )}

      {!hideNav && (
        <NavbarMobile<NavButton>
          value={currentNavButton}
          tabs={navButtons}
          tabToId={tab => tab.text}
          tabToText={tab => tab.text}
          tabToIcon={tab => tab.icon}
          onChange={setCurrentNavButton}
        />
      )}
    </div>
  )
}
