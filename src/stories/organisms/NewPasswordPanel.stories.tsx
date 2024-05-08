import type { Meta, StoryObj } from '@storybook/react'
import { NewPasswordPanelShowcase } from '../../showcase/NewPasswordPanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Onboarding/New Password Panel',
  component: NewPasswordPanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof NewPasswordPanelShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const NewPasswordPanel: Story = {
  args: {
    onClick: fn(),
  },
}
