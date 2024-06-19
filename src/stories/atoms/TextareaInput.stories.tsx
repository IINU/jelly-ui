import type { Meta, StoryObj } from '@storybook/react'
import { TextareaShowcase } from '../../showcase/TextareaShowcase'

const meta = {
  title: 'Atoms/Textarea Input',
  component: TextareaShowcase,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TextareaShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const TextareaInput: Story = {
  args: {
    error: '',
    placeholder: 'First name',
  },
}
