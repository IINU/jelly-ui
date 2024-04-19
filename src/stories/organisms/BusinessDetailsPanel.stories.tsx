import type { Meta, StoryObj } from '@storybook/react';
import { BusinessDetailsPanelShowcase } from '../../showcase/BusinessDetailsPanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Business Details Panel',
  component: BusinessDetailsPanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof BusinessDetailsPanelShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BusinessDetailsPanel: Story = {
  args: {
    onClick: fn()
  },
};
