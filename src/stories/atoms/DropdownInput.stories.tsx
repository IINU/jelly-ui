import type { Meta, StoryObj } from '@storybook/react';
import { DropdownShowcase } from '../../showcase/DropdownShowcase'

const meta = {
  title: 'Atoms/Input',
  component: DropdownShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof DropdownShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownInput: Story = {
  args: {
    error: ''
  },
};
