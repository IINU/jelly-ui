import type { Meta, StoryObj } from '@storybook/react'
import { InsightsFlashReadOnlyShowcase } from '../../showcase/InsightsFlashReadOnlyShowcase'

const meta = {
  title: 'Organisms/Insights',
  component: InsightsFlashReadOnlyShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof InsightsFlashReadOnlyShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const InsightsFlashReadOnlyStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
