import type { Meta, StoryObj } from '@storybook/react'
import { DropdownInputShowcase } from '../../showcase/DropdownInputShowcase'

const meta = {
  title: 'Atoms/Dropdowns/Dropdown Input',
  component: DropdownInputShowcase,
  parameters: { layout: 'centered' },
  argTypes: {
    customEmptyContent: {
      name: 'Apply a `emptyContent` prop?',
    },
  }

} satisfies Meta<typeof DropdownInputShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const DropdownInput: Story = {
  args: {},
}
