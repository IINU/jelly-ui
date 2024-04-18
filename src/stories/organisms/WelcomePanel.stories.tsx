import type { Meta, StoryObj } from '@storybook/react';
import { WelcomePanelShowcase } from '../../showcase/WelcomePanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Welcome Panel',
  component: WelcomePanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof WelcomePanelShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WelcomePanel: Story = {
  args: {
    onClick: fn()
  },
};
