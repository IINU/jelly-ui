import type { Meta, StoryObj } from '@storybook/react'
import { DateInputShowcase } from '../../showcase/DateInputShowcase'

const meta = {
  title: 'Atoms/Date Input',
  component: DateInputShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof DateInputShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const DateInput: Story = {
  args: {
    error: '',
  },
}
