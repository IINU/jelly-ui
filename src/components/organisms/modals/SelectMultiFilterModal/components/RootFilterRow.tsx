import { IconChevronRight } from '@tabler/icons-react'

import { FilterDefinition } from '../types'

type Props = {
  definition: FilterDefinition
  selectedLabels: string[]
  onClick: () => void
}

export function RootFilterRow({ definition, selectedLabels, onClick }: Props) {
  const Icon = definition.icon
  const hasSelection = selectedLabels.length > 0

  return (
    <div
      onClick={onClick}
      className="jui-cursor-pointer jui-bg-white jui-border-b jui-border-primary-200 jui-pt-4 jui-pb-4 jui-pl-3 jui-pr-2"
    >
      <div className="jui-flex jui-items-center jui-gap-2">
        <Icon size={24} className="jui-shrink-0 jui-text-primary-900" />

        <span className="jui-flex-1 jui-font-rubik jui-font-medium jui-text-base jui-leading-[21px] jui-text-primary-900">
          {definition.label}
        </span>

        {!hasSelection && (
          <span className="jui-font-rubik jui-font-normal jui-text-base jui-leading-none jui-text-primary-400">
            All
          </span>
        )}

        <IconChevronRight
          size={24}
          className="jui-shrink-0 jui-text-primary-400"
        />
      </div>

      {hasSelection && (
        <div className="jui-mt-2 jui-pl-8 jui-font-rubik jui-font-normal jui-text-base jui-leading-tight jui-text-primary-400">
          {selectedLabels.join(', ')}
        </div>
      )}
    </div>
  )
}
