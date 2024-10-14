import type { Meta, StoryObj } from '@storybook/react'
import { InsightsSalesMixShowcase } from '../../showcase/InsightsSalesMixShowcase'

const meta = {
  title: 'Organisms/Insights',
  component: InsightsSalesMixShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof InsightsSalesMixShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const InsightsSalesMixStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
