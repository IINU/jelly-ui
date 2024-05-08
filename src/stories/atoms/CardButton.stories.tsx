import type { Meta, StoryObj } from '@storybook/react'
import { CardButtonShowcase } from '../../showcase/CardButtonShowcase'
import { fn } from '@storybook/test'

const meta = {
  title: 'Atoms/Card Button',
  component: CardButtonShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof CardButtonShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const CardButton: Story = {
  args: {
    onClick: fn(),
    label: 'Head Chef',
  },
}
