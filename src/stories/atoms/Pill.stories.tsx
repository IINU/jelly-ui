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
  },
}

export const PillSecondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const PillSuccess: Story = {
  args: {
    variant: 'success',
  },
}
