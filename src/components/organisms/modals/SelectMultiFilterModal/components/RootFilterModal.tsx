import { Button } from '../../../../atoms/Button'
import { Modal } from '../../../../atoms/Modal'

import { RootFilterRow } from './RootFilterRow'
import { FilterDefinition, SelectedFilters } from '../types'

type Props = {
  open: boolean
  definitions: FilterDefinition[]
  draft: SelectedFilters
  onClose: () => void
  onRowClick: (key: string) => void
  onApply: () => void
  onClearAll: () => void
}

export function RootFilterModal({
  open,
  definitions,
  draft,
  onClose,
  onRowClick,
  onApply,
  onClearAll,
}: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="jui-space-y-4">
        <div className="jui-font-rubik jui-font-medium jui-text-xl jui-leading-none jui-text-primary-900">
          Filters
        </div>

        <div>
          {definitions.map((definition) => {
            const selectedValues = draft[definition.key] ?? []
            const selectedLabels = definition.options
              .filter((option) => selectedValues.includes(option.value))
              .map((option) => option.label)

            return (
              <RootFilterRow
                key={definition.key}
                definition={definition}
                selectedLabels={selectedLabels}
                onClick={() => onRowClick(definition.key)}
              />
            )
          })}
        </div>

        <div className="jui-space-y-2">
          <Button
            style="primary"
            label="Apply"
            className="jui-w-full"
            onClick={onApply}
          />

          <Button
            style="secondary"
            label="Clear all"
            className="jui-w-full"
            onClick={onClearAll}
          />
        </div>
      </div>
    </Modal>
  )
}
