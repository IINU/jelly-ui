import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { MouseEventHandler, useEffect, useState } from 'react'
import { Anchor } from '../atoms/Anchor'
import { TextInput } from '../atoms/TextInput'
import { CountryCode, CountryCodeModel } from '../../models/CountryCodeModel'
import { CountryCodeDropdown } from '../molecules/CountryCodeDropdown'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'

type Field = 'firstName' | 'lastName' | 'countryCode' | 'phoneNumber'
type Errors = Partial<Record<Field, string>>

type Props = {
  phoneNumber?: string
  register: (data: Record<Field, string | number | null>) => void
  loginLinkClicked: MouseEventHandler
  tacClicked: MouseEventHandler
  privacyPolicyClicked: MouseEventHandler
  loading?: boolean
  errors?: Errors
}

export function RegisterPanel({
  phoneNumber: phoneNumberProp,
  register,
  loginLinkClicked,
  tacClicked,
  privacyPolicyClicked,
  loading,
  errors: propErrors,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(propErrors || null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [countryCode, setCountryCode] = useState<CountryCode | null>(CountryCodeModel.find(76)) // 76 is UK
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberProp || '')

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(propErrors || null), [propErrors])

  function ctaClicked() {
    setErrors(null)

    const calcError: Errors = {}
    if (!firstName) calcError.firstName = 'This is required.'
    if (!lastName) calcError.lastName = 'This is required.'
    if (!countryCode) calcError.countryCode = 'This is required.'
    if (!phoneNumber) calcError.phoneNumber = 'This is required.'

    if (Object.values(calcError).filter(Boolean).length) {
      setErrors(calcError)
      return
    }

    register({
      firstName,
      lastName,
      countryCode: countryCode ? countryCode.code : null,
      phoneNumber,
    })
  }

  return (
    <div className="flex flex-col items-center">
      <div className="shadow w-full rounded-md">
        <div className="rounded-t-md bg-white p-4 flex justify-center">
          <JellyLogo/>
        </div>

        <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
          <div className="flex flex-col space-y-6 w-full">
            <Typography style="h6">Create account</Typography>

            <div className="flex flex-col space-y-4">
              <TextInput
                placeholder="First name"
                value={firstName}
                autoComplete="given-name"
                onChange={setFirstName}
                error={errors?.firstName}
              />

              <TextInput
                placeholder="Last name"
                value={lastName}
                autoComplete="family-name"
                onChange={setLastName}
                error={errors?.lastName}
              />

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
                  onChange={setPhoneNumber}
                  error={errors?.phoneNumber}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <Button
              style="primary"
              onClick={ctaClicked}
              disabled={loading || !firstName || !lastName || !countryCode || !phoneNumber}
              label="CONTINUE"
              className="w-full"
            />

            <div className="flex justify-center space-x-1">
              <Typography style="caption" className="text-primary-600">
                Already registered?
              </Typography>

              <Anchor style="caption" onClick={loginLinkClicked}>
                Log in here.
              </Anchor>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="flex space-x-1">
          <Anchor style="caption" onClick={tacClicked} className="text-primary-200">Terms & Conditions</Anchor>
          <Typography style="caption" className="text-primary-600">and</Typography>
          <Anchor style="caption" onClick={privacyPolicyClicked} className="text-primary-200">Privacy Policy</Anchor>
        </div>
      </div>
    </div>
  )
}
