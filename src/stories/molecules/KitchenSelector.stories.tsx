import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { KitchenSelectorShowcase } from '../../showcase/KitchenSelectorShowcase'

const meta = {
  title: 'Molecules/Kitchen Selector',
  component: KitchenSelectorShowcase,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'primary050' },
  },
  args: {
    onClick: fn(),
    title: 'Finance',
    subtitle: 'The Breakfast Club Soho',
  },
} satisfies Meta<typeof KitchenSelectorShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongKitchenName: Story = {
  args: {
    subtitle: 'The Breakfast Club London Bridge Flagship Restaurant',
  },
}
