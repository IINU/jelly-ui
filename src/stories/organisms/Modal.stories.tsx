import type { Meta, StoryObj } from '@storybook/react'
import { ModalShowcase } from '../../showcase/ModalShowcase'
import { TestModal } from '../../components/organisms/modals/TestModal'
import { ComponentProps, JSXElementConstructor } from 'react'
import { JSX } from 'react/jsx-runtime'
import IntrinsicElements = JSX.IntrinsicElements
import { JellySupportModal } from '../../components/organisms/modals/JellySupportModal'

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

