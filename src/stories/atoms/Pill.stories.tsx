import type { Meta, StoryObj } from '@storybook/react'
import { PillShowcase } from '../../showcase/PillShowcase'

const meta = {
  title: 'Atoms/Pill',
  component: PillShowcase,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PillShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const PillPrimary: Story = {
  args: {
    variant: 'primary',
    label: 'Invoice'
  },
}

export const PillSecondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Invoice'
  },
}

export const PillSuccess: Story = {
  args: {
    variant: 'success',
    label: 'Invoice'
  },
}

export const PillOutlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Invoice'
  },
}

export const PillGhost: Story = {
  args: {
    variant: 'ghost',
    label: 'Invoice'
  },
}
