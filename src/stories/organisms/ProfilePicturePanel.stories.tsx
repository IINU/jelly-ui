import type { Meta, StoryObj } from '@storybook/react'
import { ProfilePicturePanelShowcase } from '../../showcase/ProfilePicturePanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Onboarding/Profile Picture Panel',
  component: ProfilePicturePanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ProfilePicturePanelShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const ProfilePicturePanel: Story = {
  args: {
    onClick: fn(),
  },
}
