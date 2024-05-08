import type { Meta, StoryObj } from '@storybook/react'
import { NavbarShowcase } from '../../showcase/NavbarShowcase'

const meta = {
  title: 'Organisms/Navbar',
  component: NavbarShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof NavbarShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const Navbar: Story = {
  args: {
    type: 'desktop',
  },
}
