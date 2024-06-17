import type { Meta, StoryObj } from '@storybook/react'
import { InsightsPriceAlertShowcase } from '../../showcase/InsightsPriceAlertShowcase'

const meta = {
  title: 'Organisms/Insights',
  component: InsightsPriceAlertShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary200' } },
} satisfies Meta<typeof InsightsPriceAlertShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const InsightsPriceAlertStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
