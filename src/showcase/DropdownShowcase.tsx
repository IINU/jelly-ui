import { DropdownInput } from '../components/atoms/DropdownInput'
import { useState } from 'react'

type Props = {
  error: string
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
  }
]

export function DropdownShowcase({ error }: Props) {
  const [country, setCountry] = useState<Country | null>(null)

  return (
    <div className="flex">
      <div className="px-16 py-8 bg-white space-y-2 w-[24rem]">
        <DropdownInput<Country>
          placeholder="Country"
          value={country}
          options={countries}
          optionToId={c => c.id}
          optionToLabel={c => c.name}
          onChange={setCountry}
          error={error}
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
        />
      </div>
    </div>
  )
}
