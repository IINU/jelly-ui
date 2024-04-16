import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../index';
import { IconPlus } from '@tabler/icons-react'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: { layout: 'centered' },

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryText: Story = {
  args: {
    style: 'primary',
    label: 'Button',
  },
};

export const PrimaryTextIcon: Story = {
  args: {
    style: 'primary',
    label: 'Button',
    icon: IconPlus
  },
};

export const PrimaryIcon: Story = {
  args: {
    style: 'primary',
    icon: IconPlus
  },
};

export const SecondaryText: Story = {
  args: {
    style: 'secondary',
    label: 'Button',
  },
};

export const SecondaryTextIcon: Story = {
  args: {
    style: 'secondary',
    label: 'Button',
    icon: IconPlus
  },
};

export const SecondaryIcon: Story = {
  args: {
    style: 'secondary',
    icon: IconPlus
  },
};

export const DisabledText: Story = {
  args: {
    disabled: true,
    style: 'primary',
    label: 'Button',
  },
};

export const DisabledTextIcon: Story = {
  args: {
    disabled: true,
    style: 'primary',
    label: 'Button',
    icon: IconPlus
  },
};

export const DisabledIcon: Story = {
  args: {
    disabled: true,
    style: 'primary',
    icon: IconPlus
  },
};

export const DeleteText: Story = {
  args: {
    style: 'delete',
    label: 'Button',
  },
};

export const DeleteTextIcon: Story = {
  args: {
    style: 'delete',
    label: 'Button',
    icon: IconPlus
  },
};

export const DeleteIcon: Story = {
  args: {
    style: 'delete',
    icon: IconPlus
  },
};

export const GhostText: Story = {
  args: {
    style: 'ghost',
    label: 'Button',
  },
};

export const GhostTextIcon: Story = {
  args: {
    style: 'ghost',
    label: 'Button',
    icon: IconPlus
  },
};

export const GhostIcon: Story = {
  args: {
    style: 'ghost',
    icon: IconPlus
  },
};
