import type { Meta, StoryObj } from '@storybook/react';
import { RegisterPanelShowcase } from '../../showcase/RegisterPanelShowcase'

const meta = {
  title: 'Organisms/Register Panel',
  component: RegisterPanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RegisterPanelShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegisterPanel: Story = {
  args: {},
};
