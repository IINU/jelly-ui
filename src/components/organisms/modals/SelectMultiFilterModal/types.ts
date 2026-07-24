import { ComponentType } from 'react'

/**
 * How many options a filter category lets the user pick at once:
 * `multi` renders checkboxes, `single` renders radio buttons.
 */
export type FilterSelectionMode = 'multi' | 'single'

/** A single selectable option shown inside a filter category. */
export type FilterOption = {
  /** Stable identifier stored in the selection; not shown to the user. */
  value: string
  /** Human-readable text rendered next to the checkbox/radio. */
  label: string
  /** Optional helper text rendered beneath the label. */
  description?: string
}

/**
 * The full description of one filter category (e.g. "Type", "Category") and the
 * options it offers. `Category` is the union of category keys the consuming app
 * uses, defaulting to `string` for standalone use.
 */
export type FilterDefinition<Category extends string = string> = {
  /** Identifies this category; also used to read/write its selection. */
  key: Category
  label: string
  icon: ComponentType<{ size?: number | string; className?: string }>
  selectionMode: FilterSelectionMode
  options: readonly FilterOption[]
}

/**
 * The set of currently-selected option values, grouped by category key. A
 * category with no entry (or an empty array) means "nothing selected" for it.
 */
export type SelectedFilters<Category extends string = string> = Partial<
  Record<Category, string[]>
>

/**
 * Identifies which modal a trigger opens: `'root'` opens the overview modal
 * listing every category, while a category key opens that category's options
 * modal directly.
 */
export type FilterTriggerKey<Category extends string = string> =
  | 'root'
  | Category

/** A button shown in the bar that opens a filter modal when clicked. */
export type FilterTrigger<Category extends string = string> = {
  key: FilterTriggerKey<Category>
  label: string
  /** How many options are selected; when > 0 the button is styled as active. */
  count: number
}

/**
 * Props for the (fully controlled) SelectMultiFilterModal. It holds no state of
 * its own — the consumer owns the selection and open/close state and feeds them
 * back in through these props.
 */
export type SelectMultiFilterModalProps<Category extends string = string> = {
  /** The buttons rendered in the bar; each opens a modal on click. */
  triggers: FilterTrigger<Category>[]
  /** Every category, rendered as rows in the root overview modal. */
  rootDefinitions: FilterDefinition<Category>[]
  /** The category whose options modal is open, or `null` when none is. */
  activeDefinition: FilterDefinition<Category> | null
  /** Which modal is currently open (`'root'`, a category key, or none). */
  openModal: FilterTriggerKey<Category> | null
  /**
   * The in-progress selection while a modal is open — edited by toggling
   * options and only committed by the consumer on `onApply`. Kept separate from
   * the applied selection so closing without applying discards the changes.
   */
  draft: SelectedFilters<Category>
  /**
   * When `true` the trigger opens a category's options modal directly (used
   * when there are only one or two categories, so the root overview is
   * skipped). When `false` triggers open the root modal first, and the options
   * modals show a back button instead of an inline apply.
   */
  directMode: boolean
  onTriggerClick: (key: FilterTriggerKey<Category>) => void
  /** Open a category's options modal from a root-modal row. */
  onRowClick: (category: Category) => void
  /** Go back from a category's options modal to the root modal. */
  onBack: () => void
  onClose: () => void
  /** Add/remove an option value within a category in the draft. */
  onToggleOption: (category: Category, value: string) => void
  /** Commit the draft as the applied selection. */
  onApply: () => void
  /** Clear the draft across every category. */
  onClearAll: () => void
  /** Clear the draft for a single category. */
  onClearSelection: (category: Category) => void
}
