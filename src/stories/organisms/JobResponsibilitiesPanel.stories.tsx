import type { Meta, StoryObj } from '@storybook/react';
import { JobResponsibilitiesPanelShowcase } from '../../showcase/JobResponsibilitiesPanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Job Responsibilities Panel',
  component: JobResponsibilitiesPanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof JobResponsibilitiesPanelShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JobResponsibilitiesPanel: Story = {
  args: {
    onClick: fn()
  },
};
