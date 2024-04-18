import type { Meta, StoryObj } from '@storybook/react';
import { PasswordShowcase } from '../../showcase/PasswordShowcase'

const meta = {
  title: 'Atoms/Input',
  component: PasswordShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof PasswordShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordInput: Story = {
  args: {
    error: '',
    placeholder: 'Password...',
  },
};
