import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { useEffect, useState } from 'react'
import { TextInput } from '../atoms/TextInput'
import { CountryCode, CountryCodeModel } from '../../models/CountryCodeModel'
import { CountryCodeDropdown } from '../molecules/CountryCodeDropdown'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'

type Field = 'countryCode' | 'phoneNumber'
type Errors = Partial<Record<Field, string>>

type Invite = {
  name: string
}

type Props = {
  next: (data: Record<Field, string | number | null>) => void
  loading?: boolean
  invite: Invite
  errors?: Errors
}

export function InvitePanel({
  next,
  invite,
  loading,
  errors: propErrors,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(propErrors || null)
  const [countryCode, setCountryCode] = useState<CountryCode | null>(CountryCodeModel.find(76)) // 76 is UK
  const [phoneNumber, setPhoneNumber] = useState('')

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(propErrors || null), [propErrors])

  function ctaClicked() {
    setErrors(null)

    const calcError: Errors = {}
    if (!countryCode) calcError.countryCode = 'This is required.'
    if (!phoneNumber) calcError.phoneNumber = 'This is required.'

    if (Object.values(calcError).filter(Boolean).length) {
      setErrors(calcError)
      return
    }

    next({
      countryCode: countryCode ? countryCode.code : null,
      phoneNumber,
    })
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
                value={countryCode}
                onChange={setCountryCode}
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
