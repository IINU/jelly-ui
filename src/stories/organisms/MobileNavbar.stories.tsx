import type { Meta, StoryObj } from '@storybook/react'
import { MobileNavbarShowcase } from '../../showcase/MobileNavbarShowcase'

const meta = {
  title: 'Organisms/Navigation',
  component: MobileNavbarShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof MobileNavbarShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const MobileNavbarStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {
    type: 'desktop',
  },
}
