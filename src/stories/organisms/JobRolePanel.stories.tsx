import type { Meta, StoryObj } from '@storybook/react'
import { JobRolePanelShowcase } from '../../showcase/JobRolePanelShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Organisms/Onboarding/Job Role Panel',
  component: JobRolePanelShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof JobRolePanelShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const JobRolePanel: Story = {
  args: {
    onboarding: false,
    onClick: fn(),
  },
}
