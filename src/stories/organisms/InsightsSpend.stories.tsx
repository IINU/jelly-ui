import type { Meta, StoryObj } from '@storybook/react'
import { InsightsSpendShowcase } from '../../showcase/InsightsSpendShowcase'

const meta = {
  title: 'Organisms/Insights',
  component: InsightsSpendShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof InsightsSpendShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const InsightsSpendStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
