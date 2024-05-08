import type { Meta, StoryObj } from '@storybook/react'
import { ResetPasswordPanelShowcase } from '../../showcase/ResetPasswordPanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Onboarding/Reset Password Panel',
  component: ResetPasswordPanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ResetPasswordPanelShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const ResetPasswordPanel: Story = {
  args: {
    onClick: fn(),
  },
}
