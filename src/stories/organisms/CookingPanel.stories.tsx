import type { Meta, StoryObj } from '@storybook/react'
import { CookingPanelShowcase } from '../../showcase/CookingPanelShowcase'

const meta = {
  title: 'Molecules/Cooking Panel',
  component: CookingPanelShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof CookingPanelShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const CookingPanelStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
