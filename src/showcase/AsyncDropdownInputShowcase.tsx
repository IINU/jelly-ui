import { AsyncDropdownInput } from '../components/atoms/AsyncDropdownInput'
import {useState} from 'react'
import {Typography} from "../components/atoms/Typography";

type Props = {
  error?: string
  placeholder?: string
  customEmptyContent?: boolean
}

type Country = {
  id: number
  name: string
}

// Simulated API call with delay
const fetchCountries = async (search: string): Promise<Country[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  if (search === "triggerError") {
    throw new Error('Simulated error fetching countries')
  }

  const allCountries: Country[] = [
    { id: 1, name: 'United Kingdom' },
    { id: 2, name: 'France' },
    { id: 3, name: 'Germany' },
    { id: 4, name: 'Spain' },
    { id: 5, name: 'Japan' },
    { id: 6, name: 'Italy' },
    { id: 7, name: 'Canada' },
    { id: 8, name: 'Australia' },
    { id: 9, name: 'Brazil' },
    { id: 10, name: 'India' },
  ]

  return allCountries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  )
}

export function AsyncDropdownInputShowcase({ error, placeholder, customEmptyContent }: Props) {
  const [country, setCountry] = useState<Country | null>(null)

  return (
    <div className="jui-flex jui-flex-col jui-space-y-4">
      <div>
        <div className="jui-text-base jui-font-semibold jui-mb-1">
          Uncontrolled
        </div>
        <AsyncDropdownInput
          placeholder={placeholder ?? "Type to search countries..."}
          value={null}
          onChange={() => {}}
          optionToId={c => c.id}
          optionToLabel={c => c.name}
          error={error}
          fetchOptions={fetchCountries}
          debounceMs={300}
          emptyContent={customEmptyContent ? <EmptyContent /> : undefined}
        />
      </div>

      <div>
        <div className="jui-text-base jui-font-semibold jui-mb-1">
          Controlled <span className="jui-text-xs jui-font-normal">(Selected: {country?.name ?? 'None'})</span>
        </div>
        <AsyncDropdownInput
          placeholder={placeholder ?? "Type to search countries..."}
          value={country}
          onChange={setCountry}
          optionToId={c => c.id}
          optionToLabel={c => c.name}
          error={error}
          fetchOptions={fetchCountries}
          debounceMs={300}
          emptyContent={customEmptyContent ? <EmptyContent /> : undefined}
        />
      </div>

      <div>
        <div className="jui-text-base jui-font-semibold jui-mb-1">
          Disabled
        </div>
        <AsyncDropdownInput
          placeholder={placeholder ?? "Type to search countries..."}
          value={null}
          onChange={() => {}}
          optionToId={c => c.id}
          optionToLabel={c => c.name}
          error={error}
          fetchOptions={fetchCountries}
          debounceMs={300}
          disabled
          emptyContent={customEmptyContent ? <EmptyContent /> : undefined}
        />
      </div>

      <div>
        <div className="jui-text-base jui-font-semibold jui-mb-1">
          Failed fetching
        </div>
        <AsyncDropdownInput
          placeholder={placeholder ?? "Type to search countries..."}
          value={null}
          onChange={() => {}}
          optionToId={c => c.id}
          optionToLabel={c => c.name}
          error={error}
          fetchOptions={async () => await fetchCountries("triggerError")}
          debounceMs={300}
          emptyContent={customEmptyContent ? <EmptyContent /> : undefined}
        />
      </div>

      <div>
        <div className="jui-text-base jui-font-semibold jui-mb-1">
          Content underneath Options
        </div>
        <AsyncDropdownInput
          placeholder={placeholder ?? "Type to search countries..."}
          value={country}
          onChange={setCountry}
          optionToId={c => c.id}
          optionToLabel={c => c.name}
          error={error}
          fetchOptions={fetchCountries}
          debounceMs={300}
          emptyContent={customEmptyContent ? <EmptyContent /> : undefined}
          optionsBottomContent={<div className="jui-bg-orange-500 jui-text-center jui-text-white jui-p-4">Custom content here</div>}
        />
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