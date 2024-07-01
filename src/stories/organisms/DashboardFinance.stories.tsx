import type { Meta, StoryObj } from '@storybook/react'
import { DashboardFinanceShowcase } from '../../showcase/DashboardFinanceShowcase'

const meta = {
  title: 'Organisms/Dashboard',
  component: DashboardFinanceShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof DashboardFinanceShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const DashboardFinanceStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {
    type: 'desktop',
  },
}
