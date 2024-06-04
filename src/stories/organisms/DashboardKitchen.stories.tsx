import type { Meta, StoryObj } from '@storybook/react'
import { DashboardKitchenShowcase } from '../../showcase/DashboardKitchenShowcase'

const meta = {
  title: 'Organisms/Dashboard',
  component: DashboardKitchenShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary200' } },
} satisfies Meta<typeof DashboardKitchenShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const DashboardKitchenStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {
    type: 'desktop',
  },
}
