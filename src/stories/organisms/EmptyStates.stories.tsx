import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { AccurateStockTakeEmptyState } from '../../components/organisms/empty-states/AccurateStockTakeEmptyState'
import { StateShowcase } from '../../showcase/StateShowcase'
import { ActualGPFlashEmptyState } from '../../components/organisms/empty-states/ActualGPFlashEmptyState'
import { AlertPriceChangeEmptyState } from '../../components/organisms/empty-states/AlertPriceChangeEmptyState'
import { AllProductsTrackedEmptyState } from '../../components/organisms/empty-states/AllProductsTrackedEmptyState'
import { DigitalOrderingEmptyState } from '../../components/organisms/empty-states/DigitalOrderingEmptyState'
import {
  FastestCostingOnPlanetEmptyState,
} from '../../components/organisms/empty-states/FastestCostingOnPlanetEmptyState'
import { InvoicesOnePlaceEmptyState } from '../../components/organisms/empty-states/InvoicesOnePlaceEmptyState'
import { KnowYourSpendingEmptyState } from '../../components/organisms/empty-states/KnowYourSpendingEmptyState'
import { LiveMenuMarginsEmptyState } from '../../components/organisms/empty-states/LiveMenuMarginsEmptyState'

const meta = {
  title: 'Organisms/Empty States',
  component: StateShowcase,
  parameters: {
    backgrounds: { default: 'primary200' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StateShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const AccurateStockTakeStory: Story = {
  name: 'Accurate Stock Take',
  args: {
    state: AccurateStockTakeEmptyState,
    onClick: fn(),
    disabledText: '',
  },
}

export const ActualGPFlashStory: Story = {
  name: 'Actual GP Flash',
  args: {
    state: ActualGPFlashEmptyState,
    onClick: fn(),
    disabledText: '',
  },
}

export const AlertPriceChangeStory: Story = {
  name: 'Alert Price Change',
  args: {
    state: AlertPriceChangeEmptyState,
    onClick: fn(),
    disabledText: '',
  },
}

export const AllProductsTrackedStory: Story = {
  name: 'All Products Tracked',
  args: {
    state: AllProductsTrackedEmptyState,
    onClick: fn(),
    disabledText: '',
  },
}

export const DigitalOrderingStory: Story = {
  name: 'Digital Ordering',
  args: {
    state: DigitalOrderingEmptyState,
    onClick: fn(),
    disabledText: '',
  },
}

export const FastestCostingOnPlanetStory: Story = {
  name: 'Fastest Costing On Planet',
  args: {
    state: FastestCostingOnPlanetEmptyState,
    onClick: fn(),
    disabledText: '',
  },
}

export const InvoicesOnePlaceStory: Story = {
  name: 'Invoices One Place',
  args: {
    state: InvoicesOnePlaceEmptyState,
    onClick: fn(),
    disabledText: '',
  },
}

export const KnowYourSpendingStory: Story = {
  name: 'Know Your Spending',
  args: {
    state: KnowYourSpendingEmptyState,
    onClick: fn(),
    disabledText: '',
  },
}

export const LiveMenuMarginsStory: Story = {
  name: 'Live Menu Margins',
  args: {
    state: LiveMenuMarginsEmptyState,
    onClick: fn(),
    disabledText: '',
  },
}
