import { useEffect, useMemo, useState } from 'react'
import { Typography } from '../atoms/Typography'
import { IconCurrencyPound, IconSelector } from '@tabler/icons-react'
import { formatMoney } from '../../utils/utils'
import { Modal } from '../atoms/Modal'
import { DropdownInput } from '../atoms/DropdownInput'
import { NumberInput } from '../atoms/NumberInput'
import { Button } from '../atoms/Button'

export type StockSelectorData<T> = {
  adjustments: number | null
  selectedStock: T[]
}

type Props<T> = {
  readonly?: boolean
  type: 'open' | 'close'
  stockTakes: T[]
  onSubmit: (data: StockSelectorData<T>) => Promise<void>
  optionToId: (option: T) => string | number
  optionToLabel: (option: T) => string
  optionToValue: (option: T) => number
} & StockSelectorData<T>

export function InsightsStockSelector<T>({
  readonly = false,
  type,
  adjustments: initialAdjustments,
  selectedStock: initialSelectedStock,
  stockTakes,
  optionToId,
  optionToLabel,
  optionToValue,
  onSubmit,
}: Props<T>) {
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showAddButton, setShowAddButton] = useState(false)
  const [value, setValue] = useState<number | null>(null)
  const [adjustments, setAdjustments] = useState<string>('')
  const [adjustmentsValue, setAdjustmentsValue] = useState<number | null>(0)
  const [selectedStock, setSelectedStock] = useState<(T | null)[]>([])
  const [numberOfInputs, setNumberOfInputs] = useState(initialSelectedStock.length || 1)

  useEffect(() => setAdjustments((initialAdjustments ?? '').toString()), [initialAdjustments])
  useEffect(() => setAdjustmentsValue(initialAdjustments), [initialAdjustments])

  useEffect(() => {
    setNumberOfInputs(initialSelectedStock.length || 1)
    setSelectedStock(initialSelectedStock)
  }, [initialSelectedStock])

  function setStock(stock: T | null, index: number) {
    const selected = [...selectedStock]

    selected[index] = stock

    setSelectedStock(selected)
  }

  useEffect(() => {
    if (selectedStock.length === 0 && adjustmentsValue === null) {
      return setValue(null)
    }

    const stockTotal = selectedStock.reduce(
      (acc, s) => (s ? optionToValue(s) : 0) + acc,
      0,
    )

    setValue(stockTotal + (adjustmentsValue ?? 0))
  }, [optionToValue, selectedStock, adjustmentsValue])

  useEffect(() => {
    if (adjustments.trim() === '') {
      return setAdjustmentsValue(null)
    }

    const parsed = parseFloat(adjustments)

    if (!Number.isNaN(parsed)) {
      setAdjustmentsValue(parsed)
    }
  }, [adjustments])

  const finalValue: number | null = useMemo(() => {
    if (initialSelectedStock.length === 0 && initialAdjustments === null) {
      return null
    }

    return (initialAdjustments ?? 0)
      + initialSelectedStock.reduce((acc, s) => acc + (s ? optionToValue(s) : 0), 0)
  }, [initialAdjustments, initialSelectedStock, optionToValue])

  useEffect(
    () => setShowAddButton(!!selectedStock[numberOfInputs - 1]),
    [numberOfInputs, selectedStock],
  )

  async function handleSubmit() {
    if (loading) return

    const stock: T[] = []
    for (const selected of selectedStock) {
      if (selected) stock.push(selected)
    }

    setLoading(true)

    try {
      await onSubmit({
        adjustments: adjustmentsValue,
        selectedStock: stock,
      })

      setShowModal(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Modal
        open={showModal}
        onClose={() => {
          setNumberOfInputs(initialSelectedStock.length || 1)
          setSelectedStock(initialSelectedStock)
          setAdjustments((initialAdjustments ?? '').toString())
          setAdjustmentsValue(initialAdjustments)
          setShowModal(false)
        }}
      >
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
                  value={selectedStock[i] || null}
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
                value={adjustments}
                onChange={setAdjustments}
                placeholder="Enter stock adjustments"
                leftIcon={IconCurrencyPound}
              />
            </div>

            <div className="flex justify-between py-4 border-t border-primary-100">
              <Typography style="subtitle1" className="text-primary-900">
                Total
              </Typography>

              <Typography style="h6" className="text-secondary-400">
                {value === null ? (
                  <span>£--</span>
                ) : (
                  <span>{formatMoney(value)}</span>
                )}
              </Typography>
            </div>

            <Button
              onClick={handleSubmit}
              loading={loading}
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
          className={`border-2 border-primary-100 pl-4 pr-3 py-2 flex space-x-2 rounded-lg ${readonly ? 'bg-primary-100' : 'cursor-pointer'}`}
          title={finalValue ? formatMoney(finalValue) : 'No value set.'}
          onClick={() => {
            if (readonly) return
            setShowModal(true)
          }}
        >
          {finalValue === null ? (
            <Typography style="body1" className="text-primary-600 flex-1">
              Select...
            </Typography>
          ) : (
            <Typography
              style="body1"
              className="text-primary-900 flex-1 max-w-full text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {formatMoney(finalValue)}
            </Typography>
          )}

          <IconSelector className="text-primary-900"/>
        </div>
      </div>
    </>
  )
}
