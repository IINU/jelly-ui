import {
  IconCalendar,
  IconGlassCocktail,
  IconReceipt,
} from '@tabler/icons-react'
import { useMemo, useState } from 'react'

import { SelectMultiFilterModal } from '../components/organisms/modals/SelectMultiFilterModal'
import {
  FilterDefinition,
  FilterTrigger,
  FilterTriggerKey,
  SelectedFilters,
} from '../components/organisms/modals/SelectMultiFilterModal/types'

const DEFINITIONS: FilterDefinition[] = [
  {
    icon: IconReceipt,
    key: 'type',
    label: 'Type',
    options: [
      { label: 'Invoice', value: 'invoice' },
      { label: 'Credit Note', value: 'credit-note' },
      { label: 'Delivery note', value: 'delivery-note' },
      { label: 'Purchase order', value: 'purchase-order' },
      { label: 'Transfer', value: 'transfer' },
    ],
    selectionMode: 'multi',
  },
  {
    icon: IconGlassCocktail,
    key: 'category',
    label: 'Category',
    options: [
      { description: 'Food ingredients', label: 'Food', value: 'food' },
      {
        description: 'Drinks and beverages',
        label: 'Beverage',
        value: 'beverage',
      },
      { description: 'Everything else', label: 'Other', value: 'other' },
    ],
    selectionMode: 'multi',
  },
  {
    icon: IconCalendar,
    key: 'period',
    label: 'Period',
    options: [
      { label: 'Weekly', value: 'weekly' },
      { label: 'Monthly', value: 'monthly' },
      { label: 'Quarterly', value: 'quarterly' },
    ],
    selectionMode: 'single',
  },
]

type Props = {
  directMode?: boolean
}

export function SelectMultiFilterModalShowcase({ directMode = false }: Props) {
  const definitions = useMemo(
    () => (directMode ? DEFINITIONS.slice(0, 2) : DEFINITIONS),
    [directMode],
  )

  const [applied, setApplied] = useState<SelectedFilters>({})
  const [draft, setDraft] = useState<SelectedFilters>({})
  const [openModal, setOpenModal] = useState<FilterTriggerKey | null>(null)

  const activeDefinition =
    openModal !== null && openModal !== 'root'
      ? (definitions.find((definition) => definition.key === openModal) ?? null)
      : null

  const triggers: FilterTrigger[] = directMode
    ? definitions.map((definition) => ({
        count: applied[definition.key]?.length ?? 0,
        key: definition.key,
        label: definition.label,
      }))
    : [
        {
          count: definitions.filter(
            (definition) => (applied[definition.key]?.length ?? 0) > 0,
          ).length,
          key: 'root',
          label: 'Filters',
        },
      ]

  const openFrom = (key: FilterTriggerKey) => {
    setDraft(applied)
    setOpenModal(key)
  }

  const toggleOption = (category: string, value: string) => {
    const definition = definitions.find((item) => item.key === category)

    setDraft((current) => {
      if (definition?.selectionMode === 'single') {
        return { ...current, [category]: [value] }
      }

      const values = current[category] ?? []
      const nextValues = values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value]

      return { ...current, [category]: nextValues }
    })
  }

  const clearSelection = (category: string) => {
    setDraft((current) => {
      const next = { ...current }
      delete next[category]

      return next
    })
  }

  const apply = () => {
    setApplied(draft)
    setOpenModal(null)
  }

  return (
    <div className="jui-w-full jui-p-4">
      <SelectMultiFilterModal
        triggers={triggers}
        rootDefinitions={definitions}
        activeDefinition={activeDefinition}
        openModal={openModal}
        draft={draft}
        directMode={directMode}
        onTriggerClick={openFrom}
        onRowClick={(key) => setOpenModal(key)}
        onBack={() => setOpenModal('root')}
        onClose={() => setOpenModal(null)}
        onToggleOption={toggleOption}
        onApply={apply}
        onClearAll={() => setDraft({})}
        onClearSelection={clearSelection}
      />
    </div>
  )
}
