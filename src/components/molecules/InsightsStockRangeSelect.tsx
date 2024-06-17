import { useEffect, useState } from 'react'
import { InsightsStockSelector } from './InsightsStockSelector'

type Props<T> = {
  stockTakes: T[]
  onChange: (open: number, close: number) => void
  optionToId: (option: T) => string | number
  optionToLabel: (option: T) => string
  optionToValue: (option: T) => number
}

export function InsightsStockRangeSelect<T>({
  stockTakes,
  onChange,
  optionToId,
  optionToValue,
  optionToLabel,
}: Props<T>) {
  const [open, setOpen] = useState(0)
  const [close, setClose] = useState(0)

  useEffect(() => onChange(open, close), [onChange, open, close])

  return (
    <div className="px-4 py-2 grid grid-cols-2 gap-2 bg-white">
      <InsightsStockSelector<T>
        type="open"
        stockTakes={stockTakes}
        optionToId={optionToId}
        optionToLabel={optionToLabel}
        optionToValue={optionToValue}
        onChange={v => setOpen(v)}
      />

      <InsightsStockSelector<T>
        type="close"
        stockTakes={stockTakes}
        optionToId={optionToId}
        optionToLabel={optionToLabel}
        optionToValue={optionToValue}
        onChange={v => setClose(v)}
      />
    </div>
  )
}
