import type { Meta, StoryObj } from '@storybook/react'
import { CoinInHandPanelShowcase } from '../../showcase/CoinInHandPanelShowcase'

const meta = {
  title: 'Molecules/Coin In Hand Panel',
  component: CoinInHandPanelShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof CoinInHandPanelShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const CoinInHandPanelStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
