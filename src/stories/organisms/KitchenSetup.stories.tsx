import type { Meta, StoryObj } from '@storybook/react'
import { KitchenSetupShowcase } from '../../showcase/KitchenSetupShowcase'

const meta = {
  title: 'Organisms/Kitchen Setup',
  component: KitchenSetupShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof KitchenSetupShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const KitchenSetup: Story = {
  args: {},
}
