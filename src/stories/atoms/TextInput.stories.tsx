import type { Meta, StoryObj } from '@storybook/react'
import { TextShowcase } from '../../showcase/TextShowcase'

const meta = {
  title: 'Atoms/Text Input',
  component: TextShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TextShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    error: '',
    placeholder: 'First name',
  },
}
