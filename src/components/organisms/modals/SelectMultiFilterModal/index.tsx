import { FilterTriggerButton } from './components/FilterTriggerButton'
import { OptionsFilterModal } from './components/OptionsFilterModal'
import { RootFilterModal } from './components/RootFilterModal'
import { SelectMultiFilterModalProps } from './types'

export function SelectMultiFilterModal<Category extends string = string>({
  triggers,
  rootDefinitions,
  activeDefinition,
  openModal,
  draft,
  directMode,
  onTriggerClick,
  onRowClick,
  onBack,
  onClose,
  onToggleOption,
  onApply,
  onClearAll,
  onClearSelection,
}: SelectMultiFilterModalProps<Category>) {
  const selectedValues = activeDefinition
    ? (draft[activeDefinition.key] ?? [])
    : []

  return (
    <>
      <div className="jui-w-full jui-flex jui-items-center">
        {triggers.map((trigger) => (
          <FilterTriggerButton
            key={trigger.key}
            label={trigger.label}
            count={trigger.count}
            onClick={() => onTriggerClick(trigger.key)}
          />
        ))}
      </div>

      <RootFilterModal
        open={openModal === 'root'}
        definitions={rootDefinitions}
        draft={draft}
        onClose={onClose}
        onRowClick={(key) => onRowClick(key as Category)}
        onApply={onApply}
        onClearAll={onClearAll}
      />

      <OptionsFilterModal
        open={openModal !== null && openModal !== 'root'}
        definition={activeDefinition}
        selectedValues={selectedValues}
        showBackButton={!directMode}
        showApplyButton={directMode}
        onBack={onBack}
        onClose={onClose}
        onToggleOption={(value) => {
          if (activeDefinition) {
            onToggleOption(activeDefinition.key, value)
          }
        }}
        onClearSelection={() => {
          if (activeDefinition) {
            onClearSelection(activeDefinition.key)
          }
        }}
        onApply={onApply}
      />
    </>
  )
}
