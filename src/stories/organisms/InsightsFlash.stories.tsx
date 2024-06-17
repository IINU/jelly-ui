import type { Meta, StoryObj } from '@storybook/react'
import { InsightsFlashShowcase } from '../../showcase/InsightsFlashShowcase'

const meta = {
  title: 'Organisms/Insights',
  component: InsightsFlashShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary200' } },
} satisfies Meta<typeof InsightsFlashShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const InsightsFlashStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
