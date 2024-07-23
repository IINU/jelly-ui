import { Button } from '../../atoms/Button'
import { JellyLogoPrimary } from '../../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../../atoms/Typography'
import { MouseEventHandler, useEffect, useState } from 'react'
import { Anchor } from '../../atoms/Anchor'
import { TextInput } from '../../atoms/TextInput'
import { CountryCode, CountryCodeModel } from '../../../models/CountryCodeModel'
import { CountryCodeDropdown } from '../../molecules/CountryCodeDropdown'
import { PasswordInput } from '../../atoms/PasswordInput'
import { useEnterSubmit } from '../../../hooks/useEnterSubmit'

export type LoginData = {
  countryCode: string
  phoneNumber: string
  password: string
}

type Errors = Partial<Record<keyof LoginData, string>>

type Props = {
  login: (data: LoginData) => void
  registerLinkClicked: MouseEventHandler
  forgotPasswordLinkClicked: MouseEventHandler
  onChange?: (data: LoginData) => void
  loading?: boolean
  errors?: Errors
} & Partial<LoginData>

export function LoginPanel({
  login,
  registerLinkClicked,
  forgotPasswordLinkClicked,
  loading,
  onChange,
  errors: errorsProp,
  countryCode: countryCodeProp,
  phoneNumber: phoneNumberProp,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(errorsProp || null)
  const [countryCode, setCountryCode] = useState(countryCodeProp || '')
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberProp || '')
  const [password, setPassword] = useState('')

  const [countryCodeDropDown, setCountryCodeDropDown] = useState<CountryCode | null>(
    countryCodeProp
      ? CountryCodeModel.findByCode(countryCodeProp)
      : CountryCodeModel.find(76)
  )

  useEnterSubmit({ ctaClicked })
  useEffect(() => setPhoneNumber(phoneNumberProp || ''), [phoneNumberProp])
  useEffect(() => setErrors(errorsProp || null), [errorsProp])
  useEffect(() => onChange?.({ countryCode, phoneNumber, password }), [countryCode, phoneNumber, password, onChange])

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
    if (!password) calcError.password = 'This is required.'

    if (Object.values(calcError).filter(Boolean).length) {
      setErrors(calcError)
      return
    }

    login({
      password,
      countryCode,
      phoneNumber,
    })
  }

  return (
    <div className="jui-shadow jui-w-full jui-rounded-md">
      <div className="jui-rounded-t-md jui-bg-white jui-p-4 jui-flex jui-flex-col jui-items-center jui-justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="jui-space-y-8 jui-rounded-b-md jui-bg-primary-50 jui-px-4 jui-py-8 jui-text-center">
        <div className="jui-space-y-6">
          <div className="jui-space-y-2">
            <Typography style="h6" className="jui-text-primary-900">
              Welcome back!
            </Typography>

            <Typography style="caption" className="jui-text-primary-600">
              Enter your details to log into your account.
            </Typography>
          </div>

          <div className="jui-flex jui-flex-col jui-space-y-4">
            <div className="jui-flex jui-space-x-4">
              <div className="jui-w-32">
                <CountryCodeDropdown
                  value={countryCodeDropDown}
                  onChange={setCountryCodeDropDown}
                  error={errors?.countryCode}
                />
              </div>

              <TextInput
                placeholder="Phone number"
                autoComplete="tel-national"
                value={phoneNumber}
                onChange={setPhoneNumber}
                error={errors?.phoneNumber}
              />
            </div>

            <PasswordInput
              placeholder="Password"
              value={password}
              autoComplete="current-password"
              onChange={setPassword}
              error={errors?.password}
            />

            <div className="jui-flex jui-justify-center jui-space-x-1">
              <Typography style="caption" className="jui-text-primary-600">
                Forgot your password?
              </Typography>

              <Anchor style="caption" onClick={forgotPasswordLinkClicked}>
                Reset.
              </Anchor>
            </div>
          </div>
        </div>

        <div className="jui-flex jui-flex-col jui-space-y-4 jui-w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || !countryCode || !phoneNumber || !password}
            label="Login"
            className="w-full"
          />

          <div className="jui-flex jui-justify-center jui-space-x-1">
            <Typography style="caption" className="jui-text-primary-600">
              New here?
            </Typography>

            <Anchor style="caption" onClick={registerLinkClicked}>
              Signup instead.
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  )
}
