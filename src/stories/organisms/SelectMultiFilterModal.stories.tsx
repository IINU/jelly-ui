import type { Meta, StoryObj } from '@storybook/react'
import { SelectMultiFilterModalShowcase } from '../../showcase/SelectMultiFilterModalShowcase'

const meta = {
  title: 'Organisms/Select Multi Filter Modal',
  component: SelectMultiFilterModalShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof SelectMultiFilterModalShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const RootFilters: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}

export const DirectFilters: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {
    directMode: true,
  },
}
