import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '../../components/organisms/Navbar'

const meta = {
  title: 'Organisms/Navigation',
  component: Navbar,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary200' } },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>;

export const NavbarDesktop: Story = {
  parameters: {
    viewport: { defaultViewport: 'macBookPro' },
  },
  args: {
    type: 'desktop',
  },
}

export const NavbarMobile: Story = {
  args: {
    type: 'mobile',
  },
}
