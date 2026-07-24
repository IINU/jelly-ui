import { ComponentType } from 'react'

export type FilterSelectionMode = 'multi' | 'single'

export type FilterOption = {
  value: string
  label: string
  description?: string
}

export type FilterDefinition<Category extends string = string> = {
  key: Category
  label: string
  icon: ComponentType<{ size?: number | string; className?: string }>
  selectionMode: FilterSelectionMode
  options: readonly FilterOption[]
}

export type SelectedFilters<Category extends string = string> = Partial<
  Record<Category, string[]>
>

export type FilterTriggerKey<Category extends string = string> =
  | 'root'
  | Category

export type FilterTrigger<Category extends string = string> = {
  key: FilterTriggerKey<Category>
  label: string
  count: number
}

export type SelectMultiFilterModalProps<Category extends string = string> = {
  triggers: FilterTrigger<Category>[]
  rootDefinitions: FilterDefinition<Category>[]
  activeDefinition: FilterDefinition<Category> | null
  openModal: FilterTriggerKey<Category> | null
  draft: SelectedFilters<Category>
  directMode: boolean
  onTriggerClick: (key: FilterTriggerKey<Category>) => void
  onRowClick: (category: Category) => void
  onBack: () => void
  onClose: () => void
  onToggleOption: (category: Category, value: string) => void
  onApply: () => void
  onClearAll: () => void
  onClearSelection: (category: Category) => void
}
