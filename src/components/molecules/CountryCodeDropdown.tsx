import { CountryCode, CountryCodeModel } from '../../models/CountryCodeModel'
import { DropdownInput } from '../atoms/DropdownInput'

type Props = {
  value: CountryCode | null
  onChange: (countryCode: CountryCode | null) => void
  error?: string
}

export function CountryCodeDropdown({ value, onChange, error }: Props) {
  return (
    <DropdownInput<CountryCode>
      placeholder="Code"
      options={CountryCodeModel.all()}
      value={value}
      optionToId={o => o.id}
      optionToLabel={o => `+${o.code} ${o.label}`}
      optionToSearchValue={o => `+${o.code}`}
      onChange={onChange}
      error={error}
    />
  )
}