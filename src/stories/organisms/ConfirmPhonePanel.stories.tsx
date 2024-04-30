import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmPhonePanelShowcase } from '../../showcase/ConfirmPhonePanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Onboarding/Confirm Phone Panel',
  component: ConfirmPhonePanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ConfirmPhonePanelShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmPhonePanel: Story = {
  args: {
    onClick: fn()
  },
};
