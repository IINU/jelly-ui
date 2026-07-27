import { Button } from '../../../../atoms/Button'
import { Modal } from '../../../../atoms/Modal'

import { BackButton } from './BackButton'
import { CheckBoxOption } from './CheckBoxOption'
import { RadioOption } from './RadioOption'
import { FilterDefinition } from '../types'

type Props = {
  open: boolean
  definition: FilterDefinition | null
  selectedValues: string[]
  showBackButton: boolean
  showApplyButton: boolean
  onBack: () => void
  onClose: () => void
  onToggleOption: (value: string) => void
  onClearSelection: () => void
  onApply: () => void
}

export function OptionsFilterModal({
  open,
  definition,
  selectedValues,
  showBackButton,
  showApplyButton,
  onBack,
  onClose,
  onToggleOption,
  onClearSelection,
  onApply,
}: Props) {
  if (!definition) {
    return null
  }

  return (
    <Modal open={open} onClose={onClose} hideCloseButton={showBackButton}>
      <div className="jui-space-y-4">
        <div className="jui-flex jui-items-center jui-gap-2">
          {showBackButton && (
            <BackButton
              onClick={onBack}
              ariaLabel={`Back to filters from ${definition.label}`}
            />
          )}

          <span className="jui-font-rubik jui-font-medium jui-text-xl jui-leading-none jui-text-primary-900">
            {definition.label}
          </span>
        </div>

        <div className="jui-space-y-6">
          {definition.options.map((option) =>
            definition.selectionMode === 'single' ? (
              <RadioOption
                key={option.value}
                active={selectedValues.includes(option.value)}
                label={option.label}
                onClick={() => onToggleOption(option.value)}
              />
            ) : (
              <CheckBoxOption
                key={option.value}
                checked={selectedValues.includes(option.value)}
                label={option.label}
                description={option.description}
                onClick={() => onToggleOption(option.value)}
              />
            ),
          )}
        </div>

        <div className="jui-space-y-2">
          {showApplyButton && (
            <Button
              style="primary"
              label="Apply"
              className="jui-w-full"
              onClick={onApply}
            />
          )}

          <Button
            style="secondary"
            label="Clear selection"
            className="jui-w-full"
            onClick={onClearSelection}
          />
        </div>
      </div>
    </Modal>
  )
}
