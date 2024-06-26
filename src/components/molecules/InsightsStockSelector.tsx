import { useEffect, useState } from 'react'
import { Typography } from '../atoms/Typography'
import { IconSelector } from '@tabler/icons-react'
import { formatMoney } from '../../utils/utils'
import { Modal } from '../atoms/Modal'
import { DropdownInput } from '../atoms/DropdownInput'
import { NumberInput } from '../atoms/NumberInput'
import { Button } from '../atoms/Button'

type Props<T> = {
  type: 'open' | 'close'
  stockTakes: T[]
  onChange: (value: number) => void
  optionToId: (option: T) => string | number
  optionToLabel: (option: T) => string
  optionToValue: (option: T) => number
}

export function InsightsStockSelector<T>({
  type,
  stockTakes,
  optionToId,
  optionToLabel,
  optionToValue,
  onChange,
}: Props<T>) {
  const [showModal, setShowModal] = useState(false)
  const [showAddButton, setShowAddButton] = useState(false)
  const [value, setValue] = useState(0)
  const [finalValue, setFinalValue] = useState(0)
  const [manualAdjustments, setManualAdjustments] = useState('')
  const [manualAdjustmentsValue, setManualAdjustmentsValue] = useState(0)
  const [selectedStock, setSelectedStock] = useState<(T | null)[]>([])
  const [numberOfInputs, setNumberOfInputs] = useState(1)

  function setStock(stock: T | null, index: number) {
    const selected = [...selectedStock]

    selected[index] = stock

    setSelectedStock(selected)
  }

  useEffect(() => {
    const stockTotal = selectedStock.reduce(
      (acc, s) => (s ? optionToValue(s) : 0) + acc,
      0,
    )

    setValue(stockTotal + manualAdjustmentsValue)
  }, [optionToValue, selectedStock, manualAdjustmentsValue])

  useEffect(() => {
    if (manualAdjustments.trim() === '') {
      setManualAdjustmentsValue(0)
    }

    const parsed = parseFloat(manualAdjustments)

    if (!Number.isNaN(parsed)) {
      setManualAdjustmentsValue(parsed)
    }
  }, [manualAdjustments])

  useEffect(
    () => setShowAddButton(!!selectedStock[numberOfInputs - 1]),
    [numberOfInputs, selectedStock],
  )

  useEffect(() => onChange(finalValue), [onChange, finalValue])

  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="space-y-6">
          <Typography style="h6" className="text-primary-900">
            {type === 'open' ? 'Set opening stock' : 'Set closing stock'}
          </Typography>

          <div className="space-y-4">
            {Array.from({ length: numberOfInputs }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Typography style="caption" className="text-primary-800">
                  Select stock
                </Typography>

                <DropdownInput
                  options={stockTakes}
                  value={selectedStock[i]}
                  optionToId={optionToId}
                  optionToLabel={optionToLabel}
                  onChange={(stock) => setStock(stock, i)}
                  placeholder="Please select..."
                  searchable={false}
                />
              </div>
            ))}

            <div className="w-full flex justify-center">
              {showAddButton && (
                <Button
                  style="secondary"
                  onClick={() => setNumberOfInputs(numberOfInputs + 1)}
                  label="Add another"
                />
              )}
            </div>

            <div className="space-y-2">
              <Typography style="caption" className="text-primary-800">
                Manual adjustments
              </Typography>

              <NumberInput
                value={manualAdjustments}
                onChange={setManualAdjustments}
                placeholder={
                  type === 'open'
                    ? 'Enter opening stock value (£)'
                    : 'Enter closing stock value (£)'
                }
              />
            </div>

            <div className="flex justify-between py-4 border-t border-primary-100">
              <Typography style="subtitle1" className="text-primary-900">
                Total
              </Typography>

              <Typography style="h6" className="text-secondary-400">
                {formatMoney(value)}
              </Typography>
            </div>

            <Button
              onClick={() => {
                setFinalValue(value)
                setShowModal(false)
              }}
              label="Submit"
              className="w-full"
            />
          </div>
        </div>
      </Modal>

      <div className="w-full space-y-2">
        <Typography style="caption" className="text-primary-800">
          {type === 'open' ? 'Open stock' : 'Closing stock'}
        </Typography>

        <div
          className="border-2 border-gray-200 px-4 py-2 flex space-x-2 rounded-lg cursor-pointer"
          title={formatMoney(finalValue)}
          onClick={() => setShowModal(true)}
        >
          {finalValue ? (
            <Typography
              style="body1"
              className="text-primary-900 flex-1 max-w-full text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {formatMoney(finalValue)}
            </Typography>
          ) : (
            <Typography style="body1" className="text-primary-600 flex-1">
              Select...
            </Typography>
          )}

          <IconSelector className="text-secondary-400"/>
        </div>
      </div>
    </>
  )
}
