import { DropdownInput } from '../components/atoms/DropdownInput'
import { useState } from 'react'
import { Typography } from "../components/atoms/Typography";

type Props = {
  error?: string
  searchable?: boolean
  customEmptyContent?: boolean
}

type Country = {
  id: number
  name: string
}

const countries: Country[] = [
  {
    id: 1,
    name: 'United Kingdom',
  },
  {
    id: 2,
    name: 'France',
  },
  {
    id: 3,
    name: 'Germany',
  },
  {
    id: 4,
    name: 'Spain',
  },
  {
    id: 5,
    name: 'Japan',
  },
]

export function DropdownInputShowcase({ error, searchable, customEmptyContent }: Props) {
  const [country, setCountry] = useState<Country | null>(null)

  return (
    <div className="jui-flex">
      <div className="jui-px-16 jui-py-8 jui-bg-white jui-space-y-2 jui-w-[24rem]">
        <div>
          <div className="jui-text-base jui-font-semibold jui-mb-1">
            Basic
          </div>
          <DropdownInput<Country>
            placeholder="Country"
            value={country}
            options={countries}
            optionToId={c => c.id}
            optionToLabel={c => c.name}
            onChange={setCountry}
            error={error}
            searchable={searchable}
            emptyContent={customEmptyContent ? <EmptyContent /> : undefined}
          />
        </div>

        <div>
          <div className="jui-text-base jui-font-semibold jui-mb-1">
            Loading
          </div>
          <DropdownInput<Country>
            placeholder="Country"
            value={country}
            options={countries}
            optionToId={c => c.id}
            optionToLabel={c => c.name}
            onChange={setCountry}
            error={error}
            loading={true}
            searchable={searchable}
            emptyContent={customEmptyContent ? <EmptyContent /> : undefined}
          />
        </div>

        <div>
          <div className="jui-text-base jui-font-semibold jui-mb-1">
            Disabled
          </div>
          <DropdownInput<Country>
            placeholder="Country"
            value={country}
            options={countries}
            optionToId={c => c.id}
            optionToLabel={c => c.name}
            onChange={setCountry}
            error={error}
            disabled
            searchable={searchable}
            emptyContent={customEmptyContent ? <EmptyContent /> : undefined}
          />
        </div>

        <div>
          <div className="jui-text-base jui-font-semibold jui-mb-1">
            Content underneath Options
          </div>
          <DropdownInput<Country>
            placeholder="Country"
            value={country}
            options={countries}
            optionToId={c => c.id}
            optionToLabel={c => c.name}
            onChange={setCountry}
            error={error}
            searchable={searchable}
            emptyContent={customEmptyContent ? <EmptyContent /> : undefined}
            optionsBottomContent={<div className="jui-bg-orange-500 jui-text-center jui-text-white jui-p-4">Custom content here</div>}
            />
          </div>
      </div>
    </div>
  )
}

function EmptyContent() {
  return (
    <Typography style="body1" className="jui-truncate">
      A custom message when no options are found.
    </Typography>
  )
}