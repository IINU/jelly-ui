import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { NotificationShowcase } from '../../showcase/NotificationShowcase'

const meta = {
  title: 'Molecules/Notification',
  component: NotificationShowcase,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof NotificationShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const Information: Story = {
  args: {
    variant: 'information',
    text: "Upload your kitchen's invoices and we'll break down your spending for you.",
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    text: 'Update your email address so we can confirm your orders with suppliers',
  },
}

export const Clickable: Story = {
  args: {
    variant: 'warning',
    text: 'Your payment failed, tap to update your details.',
    onClick: fn(),
  },
}

export const LongText: Story = {
  args: {
    variant: 'warning',
    text: 'We could not sync your latest invoices from the supplier, so some figures may be out of date. Check back shortly or contact support if the problem persists.',
  },
}
