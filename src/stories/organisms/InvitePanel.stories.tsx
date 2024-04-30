import type { Meta, StoryObj } from '@storybook/react';
import { InvitePanelShowcase } from '../../showcase/InvitePanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Onboarding/Invite Panel',
  component: InvitePanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof InvitePanelShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvitePanel: Story = {
  args: {
    name: 'Bun & Done',
    onClick: fn()
  },
};
