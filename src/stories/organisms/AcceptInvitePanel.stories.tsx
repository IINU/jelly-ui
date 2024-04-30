import type { Meta, StoryObj } from '@storybook/react';
import { AcceptInvitePanelShowcase } from '../../showcase/AcceptInvitePanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Onboarding/Accept Invite Panel',
  component: AcceptInvitePanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AcceptInvitePanelShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AcceptInvitePanel: Story = {
  args: {
    name: 'Bun & Done',
    onClick: fn()
  },
};
