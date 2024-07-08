import type { Meta, StoryObj } from '@storybook/react'
import { TodoDetailsShowcase } from '../../showcase/TodoDetailsShowcase'

const meta = {
  title: 'Organisms/To-do',
  component: TodoDetailsShowcase,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'primary050' } },
} satisfies Meta<typeof TodoDetailsShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const TodoDetailsStory: Story = {
  parameters: {
    viewport: { defaultViewport: 'iPhoneSE' },
  },
  args: {},
}
