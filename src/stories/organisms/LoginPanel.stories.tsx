import type { Meta, StoryObj } from '@storybook/react';
import { LoginPanelShowcase } from '../../showcase/LoginPanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Onboarding/Login Panel',
  component: LoginPanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof LoginPanelShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginPanel: Story = {
  args: {
    onClick: fn()
  },
};
