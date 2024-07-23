import { InsightsStockSelector, StockSelectorData } from './InsightsStockSelector'

type StockRangeData<T> = {
  open: StockSelectorData<T>
  close: StockSelectorData<T>
}

type Props<T> = {
  readonly?: boolean
  stockTakes: T[]
  onOpenSubmit: (data: StockSelectorData<T>) => Promise<void>
  onCloseSubmit: (data: StockSelectorData<T>) => Promise<void>
  optionToId: (option: T) => string | number
  optionToLabel: (option: T) => string
  optionToValue: (option: T) => number
} & StockRangeData<T>

export function InsightsStockRangeSelect<T>({
  readonly = false,
  stockTakes,
  open: openData,
  close: closeData,
  onOpenSubmit,
  onCloseSubmit,
  optionToId,
  optionToValue,
  optionToLabel,
}: Props<T>) {
  return (
    <div className="jui-px-4 jui-py-2 jui-grid jui-grid-cols-2 jui-gap-2 jui-bg-white">
      <InsightsStockSelector<T>
        readonly={readonly}
        type="open"
        stockTakes={stockTakes}
        optionToId={optionToId}
        optionToLabel={optionToLabel}
        optionToValue={optionToValue}
        onSubmit={onOpenSubmit}
        {...openData}
      />

      <InsightsStockSelector<T>
        readonly={readonly}
        type="close"
        stockTakes={stockTakes}
        optionToId={optionToId}
        optionToLabel={optionToLabel}
        optionToValue={optionToValue}
        onSubmit={onCloseSubmit}
        {...closeData}
      />
    </div>
  )
}
