import type { Meta, StoryObj } from '@storybook/react'
import { DesktopNavbarShowcase } from '../../showcase/DesktopNavbarShowcase'

const meta = {
  title: 'Organisms/Navigation',
  component: DesktopNavbarShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof DesktopNavbarShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const DesktopNavbarStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'MacBook Pro' },
  },
  args: {
    type: 'desktop',
  },
}
