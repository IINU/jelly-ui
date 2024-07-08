import type { Meta, StoryObj } from '@storybook/react'
import { TodoShowcase } from '../../showcase/TodoShowcase'

const meta = {
  title: 'Organisms/To-do',
  component: TodoShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof TodoShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const TodoStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
