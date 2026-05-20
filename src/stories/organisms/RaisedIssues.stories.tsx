import type { Meta, StoryObj } from '@storybook/react'

import { IssueSentPanelShowcase } from '../../showcase/IssueSentPanelShowcase'

const meta = {
  title: 'Organisms/Raised Issues',
  component: IssueSentPanelShowcase,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IssueSentPanelShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const IssueSentPanelStory: Story = {
  name: 'Issue Sent Panel',
}
