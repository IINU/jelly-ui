import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { useEffect, useState } from 'react'
import { TextInput } from '../atoms/TextInput'
import { CountryCode, CountryCodeModel } from '../../models/CountryCodeModel'
import { CountryCodeDropdown } from '../molecules/CountryCodeDropdown'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'

type Invite = {
  name: string
}

export type InviteData = {
  countryCode: string
  phoneNumber: string
}

type Errors = Partial<Record<keyof InviteData, string>>

type Props = {
  next: (data: InviteData) => void
  invite: Invite
  onChange?: (data: InviteData) => void
  loading?: boolean
  errors?: Errors
} & Partial<InviteData>

export function InvitePanel({
  next,
  invite,
  loading,
  onChange,
  errors: errorsProp,
  countryCode: countryCodeProp,
  phoneNumber: phoneNumberProp,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(errorsProp || null)
  const [countryCode, setCountryCode] = useState(countryCodeProp || '')
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberProp || '')

  const [countryCodeDropDown, setCountryCodeDropDown] = useState<CountryCode | null>(
    countryCodeProp
      ? CountryCodeModel.findByCode(countryCodeProp)
      : CountryCodeModel.find(76)
  )

  useEnterSubmit({ ctaClicked })
  useEffect(() => setPhoneNumber(phoneNumberProp || ''), [phoneNumberProp])
  useEffect(() => setErrors(errorsProp || null), [errorsProp])
  useEffect(() => onChange?.({ countryCode, phoneNumber }), [countryCode, phoneNumber, onChange])

  useEffect(() => {
    if (!countryCodeProp) return
    setCountryCodeDropDown(CountryCodeModel.findByCode(countryCodeProp))
  }, [countryCodeProp])
  useEffect(() => setCountryCode(countryCodeDropDown?.code || ''), [countryCodeDropDown])

  function ctaClicked() {
    setErrors(null)

    const calcError: Errors = {}
    if (!countryCode) calcError.countryCode = 'This is required.'
    if (!phoneNumber) calcError.phoneNumber = 'This is required.'

    if (Object.values(calcError).filter(Boolean).length) {
      setErrors(calcError)
      return
    }

    next({ countryCode, phoneNumber })
  }

  return (
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogo/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col space-y-2">
            <Typography style="caption" className="flex flex-col text-primary-600 space-x-1">
              <span>You've been invited to join</span>
              <span className="text-secondary-400">{invite.name}</span>
            </Typography>
          </div>

          <div className="flex space-x-4">
            <div className="w-32">
              <CountryCodeDropdown
                value={countryCodeDropDown}
                onChange={setCountryCodeDropDown}
                error={errors?.countryCode}
              />
            </div>

            <TextInput
              placeholder="Phone number"
              value={phoneNumber}
              autoComplete="tel-national"
              onChange={setPhoneNumber}
              error={errors?.phoneNumber}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || !countryCode || !phoneNumber}
            label="CONTINUE"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
