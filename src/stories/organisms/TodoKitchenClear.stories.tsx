import type { Meta, StoryObj } from '@storybook/react'
import { TodoKitchenClearShowcase } from '../../showcase/TodoKitchenClearShowcase'

const meta = {
  title: 'Organisms/To-do',
  component: TodoKitchenClearShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof TodoKitchenClearShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const TodoKitchenClearStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
