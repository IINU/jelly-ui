import type { Meta, StoryObj } from '@storybook/react'
import { NavbarMobileShowcase } from '../../showcase/NavbarMobileShowcase'

const meta = {
  title: 'Organisms/Navigation',
  component: NavbarMobileShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary200' } },
} satisfies Meta<typeof NavbarMobileShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const NavbarStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {
    type: 'desktop',
  },
}
