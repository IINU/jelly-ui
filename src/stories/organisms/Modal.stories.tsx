import type { Meta, StoryObj } from '@storybook/react'
import { ModalShowcase } from '../../showcase/ModalShowcase'
import { ComponentProps, JSXElementConstructor } from 'react'
import { JSX } from 'react/jsx-runtime'
import IntrinsicElements = JSX.IntrinsicElements
import { TestModal } from '../../components/organisms/modals/TestModal'
import { JellySupportModal } from '../../components/organisms/modals/JellySupportModal'
import { ConfettiModal } from '../../components/organisms/modals/ConfettiModal'
import { InvoiceRuleModal } from '../../components/organisms/modals/InvoiceRuleModal'

const meta = {
  title: 'Organisms/Modal',
  component: ModalShowcase,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ModalShowcase>

export default meta

type Story<T> = StoryObj<{ component: typeof ModalShowcase<T> }>

type ModalStory<
  T extends JSXElementConstructor<any> | keyof IntrinsicElements
> = Story<Omit<ComponentProps<T>, 'open' | 'onClose'>>

export const TestModalStory: ModalStory<typeof TestModal> = {
  name: 'Test Modal',
  args: {
    component: TestModal,
    props: { ctaClicked: () => (void 0) },
  },
}

export const JellySupportModalStory: ModalStory<typeof JellySupportModal> = {
  name: 'Jelly Support Modal',
  args: {
    component: JellySupportModal,
    props: { ctaClicked: () => (void 0) },
  },
}

export const ConfettiModalStory: ModalStory<typeof ConfettiModal> = {
  name: 'Confetti Modal',
  args: {
    component: ConfettiModal,
    props: {},
  },
}

export const InvoiceRuleModalStory: ModalStory<typeof InvoiceRuleModal> = {
  name: 'Invoice Rule Modal',
  args: {
    component: InvoiceRuleModal,
    props: {
      onSave: () => Promise.resolve(),
      approveAllInvoices: false,
      approvalThreshold: null,
    },
  },
}
