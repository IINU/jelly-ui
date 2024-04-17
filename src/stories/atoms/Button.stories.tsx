import type { Meta, StoryObj } from '@storybook/react';
import { ButtonShowcase } from '../../showcase/ButtonShowcase'

const meta = {
  title: 'Atoms/Button',
  component: ButtonShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ButtonShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    style: 'primary'
  },
};

export const ButtonSecondary: Story = {
  args: {
    style: 'secondary'
  },
};

export const ButtonDelete: Story = {
  args: {
    style: 'delete'
  },
};

export const ButtonDisabled: Story = {
  args: {
    style: 'disabled'
  },
};

export const GhostDisabled: Story = {
  args: {
    style: 'primary'
  },
};
