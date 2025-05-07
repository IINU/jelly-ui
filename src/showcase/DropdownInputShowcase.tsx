import { DropdownInput } from '../components/atoms/DropdownInput'
import { useState } from 'react'

type Props = {
  error?: string
  searchable?: boolean
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

export function DropdownInputShowcase({ error, searchable }: Props) {
  const [country, setCountry] = useState<Country | null>(null)

  return (
    <div className="jui-flex">
      <div className="jui-px-16 jui-py-8 jui-bg-white jui-space-y-2 jui-w-[24rem]">
        <DropdownInput<Country>
          placeholder="Country"
          value={country}
          options={countries}
          optionToId={c => c.id}
          optionToLabel={c => c.name}
          onChange={setCountry}
          error={error}
          searchable={searchable}
        />

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
        />

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
        />
      </div>
    </div>
  )
}
