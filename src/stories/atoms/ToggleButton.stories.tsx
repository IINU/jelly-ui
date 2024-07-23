import type { Meta, StoryObj } from '@storybook/react'
import { ToggleButtonShowcase } from '../../showcase/ToggleButtonShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Atoms/Toggle Button',
  component: ToggleButtonShowcase,
  parameters: { layout: 'iPhoneSE' },
} satisfies Meta<typeof ToggleButtonShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const ToggleButton: Story = {
  args: {
    onClick: fn(),
    label: 'Head Chef',
  },
}
