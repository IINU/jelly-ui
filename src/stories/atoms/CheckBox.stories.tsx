import type { Meta, StoryObj } from '@storybook/react'
import { CheckBoxShowcase } from '../../showcase/CheckBoxShowcase'

const meta = {
  title: 'Atoms/Check Box',
  component: CheckBoxShowcase,
  parameters: { layout: 'iPhoneSE' },
} satisfies Meta<typeof CheckBoxShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBox: Story = {
  args: {},
}

export const DisabledCheckBox: Story = {
  args: {
    disabled: true,
  },
}
