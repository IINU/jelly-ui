import type { Meta, StoryObj } from '@storybook/react';
import { RegisterPanelShowcase } from '../../showcase/RegisterPanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Onboarding/Register Panel',
  component: RegisterPanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RegisterPanelShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegisterPanel: Story = {
  args: {
    onClick: fn()
  },
};
