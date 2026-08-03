import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { RootFilterModal } from './RootFilterModal'
import { FilterDefinition } from '../types'

const Icon = () => <svg />

const definition: FilterDefinition = {
  key: 'type',
  label: 'Type',
  icon: Icon,
  selectionMode: 'multi',
  options: [
    { value: 'a', label: 'Alpha' },
    { value: 'b', label: 'Beta' },
  ],
}

const renderModal = (draft: Record<string, string[]>) =>
  render(
    <RootFilterModal
      open
      definitions={[definition]}
      draft={draft}
      onClose={vi.fn()}
      onRowClick={vi.fn()}
      onApply={vi.fn()}
      onClearAll={vi.fn()}
    />,
  )

describe('RootFilterModal', () => {
  it('shows "All" when every option in a category is selected', () => {
    renderModal({ type: ['a', 'b'] })

    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.queryByText('Alpha, Beta')).not.toBeInTheDocument()
  })

  it('lists the selected labels when only some options are selected', () => {
    renderModal({ type: ['a'] })

    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.queryByText('All')).not.toBeInTheDocument()
  })

  it('shows "All" when nothing is selected', () => {
    renderModal({})

    expect(screen.getByText('All')).toBeInTheDocument()
  })
})
