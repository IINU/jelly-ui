import type { Meta, StoryObj } from '@storybook/react'
import { TrophyPanelShowcase } from '../../showcase/TrophyPanelShowcase'

const meta = {
  title: 'Molecules/Trophy Panel',
  component: TrophyPanelShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof TrophyPanelShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const TrophyPanelStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
