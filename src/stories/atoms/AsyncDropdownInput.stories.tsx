import type { Meta, StoryObj } from '@storybook/react'
import { AsyncDropdownInputShowcase } from '../../showcase/AsyncDropdownInputShowcase'

const meta = {
  title: 'Atoms/Dropdowns/Async Dropdown Input',
  component: AsyncDropdownInputShowcase,
  parameters: { layout: 'centered' },
  argTypes: {
    customEmptyContent: {
      name: 'Apply a `emptyContent` prop?',
    },
  }
} satisfies Meta<typeof AsyncDropdownInputShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const AsyncDropdownInput: Story = {
  args: {},
}