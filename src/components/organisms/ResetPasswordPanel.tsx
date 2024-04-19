import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { MouseEventHandler, useEffect, useState } from 'react'
import { Anchor } from '../atoms/Anchor'
import { TextInput } from '../atoms/TextInput'
import { CountryCode, CountryCodeModel } from '../../models/CountryCodeModel'
import { CountryCodeDropdown } from '../molecules/CountryCodeDropdown'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'

type Field = 'countryCode' | 'phoneNumber'
type Errors = Partial<Record<Field, string>>

type Props = {
  resetPassword: (data: Record<Field, string | number | null>) => void
  loginLinkClicked: MouseEventHandler
  loading?: boolean
  errors?: Errors
}

export function ResetPasswordPanel({
  resetPassword,
  loginLinkClicked,
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

    resetPassword({
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
        <div className="flex flex-col space-y-4 w-full">
          <Typography style="h6">Forgot Password</Typography>

          <Typography style="caption" className="text-primary-600">
            Enter your phone number and we will text you a reset code.
          </Typography>

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
            style={loading ? 'disabled' : 'primary'}
            onClick={ctaClicked}
            label="SEND"
            className="w-full"
          />

          <div className="flex justify-center space-x-1">
            <Typography style="caption" className="text-primary-600">
              Return to
            </Typography>

            <Anchor style="caption" onClick={loginLinkClicked}>
              Log In.
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  )
}
