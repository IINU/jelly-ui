import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { StateShowcase } from '../../showcase/StateShowcase'
import { AccurateStockTakeNotPaidState } from '../../components/organisms/not-paid-states/AccurateStockTakeNotPaidState'
import { ActualGPFlashNotPaidState } from '../../components/organisms/not-paid-states/ActualGPFlashNotPaidState'
import { AlertPriceChangeNotPaidState } from '../../components/organisms/not-paid-states/AlertPriceChangeNotPaidState'
import {
  AllProductsTrackedNotPaidState,
} from '../../components/organisms/not-paid-states/AllProductsTrackedNotPaidState'
import { DigitalOrderingNotPaidState } from '../../components/organisms/not-paid-states/DigitalOrderingNotPaidState'
import {
  FastestCostingOnPlanetNotPaidState,
} from '../../components/organisms/not-paid-states/FastestCostingOnPlanetNotPaidState'
import { InvoicesOnePlaceNotPaidState } from '../../components/organisms/not-paid-states/InvoicesOnePlaceNotPaidState'
import { KnowYourSpendingNotPaidState } from '../../components/organisms/not-paid-states/KnowYourSpendingNotPaidState'
import { LiveMenuMarginsNotPaidState } from '../../components/organisms/not-paid-states/LiveMenuMarginsNotPaidState'

const meta = {
  title: 'Organisms/Not Paid States',
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
    state: AccurateStockTakeNotPaidState,
    onClick: fn(),
    disabledText: '',
  },
}

export const ActualGPFlashStory: Story = {
  name: 'Actual GP Flash',
  args: {
    state: ActualGPFlashNotPaidState,
    onClick: fn(),
    disabledText: '',
  },
}

export const AlertPriceChangeStory: Story = {
  name: 'Alert Price Change',
  args: {
    state: AlertPriceChangeNotPaidState,
    onClick: fn(),
    disabledText: '',
  },
}

export const AllProductsTrackedStory: Story = {
  name: 'All Products Tracked',
  args: {
    state: AllProductsTrackedNotPaidState,
    onClick: fn(),
    disabledText: '',
  },
}

export const DigitalOrderingStory: Story = {
  name: 'Digital Ordering',
  args: {
    state: DigitalOrderingNotPaidState,
    onClick: fn(),
    disabledText: '',
  },
}

export const FastestCostingOnPlanetStory: Story = {
  name: 'Fastest Costing On Planet',
  args: {
    state: FastestCostingOnPlanetNotPaidState,
    onClick: fn(),
    disabledText: '',
  },
}

export const InvoicesOnePlaceStory: Story = {
  name: 'Invoices One Place',
  args: {
    state: InvoicesOnePlaceNotPaidState,
    onClick: fn(),
    disabledText: '',
  },
}

export const KnowYourSpendingStory: Story = {
  name: 'Know Your Spending',
  args: {
    state: KnowYourSpendingNotPaidState,
    onClick: fn(),
    disabledText: '',
  },
}

export const LiveMenuMarginsStory: Story = {
  name: 'Live Menu Margins',
  args: {
    state: LiveMenuMarginsNotPaidState,
    onClick: fn(),
    disabledText: '',
  },
}
