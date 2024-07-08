import type { Meta, StoryObj } from '@storybook/react'
import { TodoEmptyShowcase } from '../../showcase/TodoEmptyShowcase'

const meta = {
  title: 'Organisms/To-do',
  component: TodoEmptyShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof TodoEmptyShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const TodoEmptyStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
