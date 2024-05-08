import { Button } from '../atoms/Button'
import { JellyLogoPrimary } from '../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../atoms/Typography'
import { MouseEventHandler, useEffect, useState } from 'react'
import { Anchor } from '../atoms/Anchor'
import { TextInput } from '../atoms/TextInput'
import { CountryCode, CountryCodeModel } from '../../models/CountryCodeModel'
import { CountryCodeDropdown } from '../molecules/CountryCodeDropdown'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'

export type RegisterData = {
  firstName: string
  lastName: string
  email: string
  countryCode: string
  phoneNumber: string
}

type Errors = Partial<Record<keyof RegisterData, string>>

type Props = {
  register: (data: RegisterData) => void
  tacClicked: MouseEventHandler
  privacyPolicyClicked: MouseEventHandler
  loginLinkClicked?: MouseEventHandler
  onChange?: (data: RegisterData) => void
  loading?: boolean
  errors?: Errors
} & Partial<RegisterData>

export function RegisterPanel({
  register,
  loginLinkClicked,
  tacClicked,
  privacyPolicyClicked,
  loading,
  onChange,
  errors: errorsProp,
  firstName: firstNameProp,
  lastName: lastNameProp,
  email: emailProp,
  countryCode: countryCodeProp,
  phoneNumber: phoneNumberProp,
}: Props) {

  const [errors, setErrors] = useState<Errors | null>(errorsProp || null)
  const [firstName, setFirstName] = useState(firstNameProp || '')
  const [lastName, setLastName] = useState(firstNameProp || '')
  const [email, setEmail] = useState(emailProp || '')
  const [countryCode, setCountryCode] = useState(countryCodeProp || '')
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberProp || '')

  const [countryCodeDropDown, setCountryCodeDropDown] = useState<CountryCode | null>(
    countryCodeProp
      ? CountryCodeModel.findByCode(countryCodeProp)
      : CountryCodeModel.find(76)
  )

  useEnterSubmit({ ctaClicked })
  useEffect(() => setFirstName(firstNameProp || ''), [firstNameProp])
  useEffect(() => setLastName(lastNameProp || ''), [lastNameProp])
  useEffect(() => setEmail(emailProp || ''), [emailProp])
  useEffect(() => setPhoneNumber(phoneNumberProp || ''), [phoneNumberProp])
  useEffect(() => setErrors(errorsProp || null), [errorsProp])
  useEffect(() => onChange?.({ firstName, lastName, email, countryCode, phoneNumber }), [firstName, lastName, email, countryCode, phoneNumber, onChange])

  useEffect(() => {
    if (!countryCodeProp) return
    setCountryCodeDropDown(CountryCodeModel.findByCode(countryCodeProp))
  }, [countryCodeProp])
  useEffect(() => setCountryCode(countryCodeDropDown?.code || ''), [countryCodeDropDown])

  function ctaClicked() {
    setErrors(null)

    const calcError: Errors = {}
    if (!firstName) calcError.firstName = 'This is required.'
    if (!lastName) calcError.lastName = 'This is required.'
    if (!email) calcError.email = 'This is required.'
    if (!countryCode) calcError.countryCode = 'This is required.'
    if (!phoneNumber) calcError.phoneNumber = 'This is required.'

    if (Object.values(calcError).filter(Boolean).length) {
      setErrors(calcError)
      return
    }

    register({ firstName, lastName, email, countryCode, phoneNumber })
  }

  return (
    <div className="space-y-8">
      <div className="shadow w-full rounded-md">
        <div className="rounded-t-md bg-white p-4 flex justify-center">
          <JellyLogoPrimary/>
        </div>

        <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
          <div className="flex flex-col space-y-6 w-full">
            <Typography style="h6">Create account</Typography>

            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
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
              </div>

              <TextInput
                placeholder="Email"
                value={email}
                autoComplete="email"
                onChange={setEmail}
                error={errors?.email}
              />

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
              label="Continue"
              className="w-full"
            />

            {loginLinkClicked && (
              <div className="flex justify-center space-x-1">
                <Typography style="caption" className="text-primary-600">
                  Already registered?
                </Typography>

                <Anchor style="caption" onClick={loginLinkClicked}>
                  Log in here.
                </Anchor>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex space-x-1">
          <Anchor style="caption" onClick={tacClicked} className="!text-primary-200">Terms & Conditions</Anchor>
          <Typography style="caption" className="text-primary-600">and</Typography>
          <Anchor style="caption" onClick={privacyPolicyClicked} className="!text-primary-200">Privacy Policy</Anchor>
        </div>
      </div>
    </div>
  )
}
