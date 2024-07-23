import { Button } from '../../atoms/Button'
import { JellyLogoPrimary } from '../../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../../atoms/Typography'
import { MouseEventHandler, useEffect, useState } from 'react'
import { Anchor } from '../../atoms/Anchor'
import { PasswordInput } from '../../atoms/PasswordInput'
import { useEnterSubmit } from '../../../hooks/useEnterSubmit'

export type NewPasswordData = {
  password: string
  confirmPassword: string
}

type Errors = Partial<Record<keyof NewPasswordData, string>>

type Props = {
  newPassword: (data: NewPasswordData) => void
  loginLinkClicked?: MouseEventHandler
  loading?: boolean
  errors?: Errors
}

export function NewPasswordPanel({
  newPassword,
  loginLinkClicked,
  loading,
  errors: propErrors,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(propErrors || null)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(propErrors || null), [propErrors])

  function ctaClicked() {
    setErrors(null)

    const calcErrors: Errors = {}
    if (password.length < 8)
      calcErrors.password = 'Password must be 8 or more characters long.'
    if (password !== confirmPassword)
      calcErrors.confirmPassword = 'Passwords do not match.'
    if (!password)
      calcErrors.password = 'This is required.'
    if (!confirmPassword)
      calcErrors.confirmPassword = 'This is required.'

    if (Object.values(calcErrors).filter(Boolean).length) {
      setErrors(calcErrors)
      return
    }

    newPassword({ password, confirmPassword })
  }

  return (
    <div className="jui-shadow jui-w-full jui-rounded-md">
      <div className="jui-rounded-t-md jui-bg-white jui-p-4 jui-flex jui-flex-col jui-items-center jui-justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="jui-flex jui-flex-col jui-items-center jui-space-y-8 jui-rounded-b-md jui-bg-primary-50 jui-px-4 jui-py-8 jui-text-center">
        <div className="jui-flex jui-flex-col jui-space-y-6 jui-w-full">
          <div className="jui-flex jui-flex-col jui-space-y-2">
            <Typography style="h6" className="jui-text-primary-900">
              New Password
            </Typography>

            <Typography style="caption" className="jui-text-primary-600">
              We take pride in best-in-class-security. Password must be 8 or
              more characters long.
            </Typography>
          </div>

          <div className="jui-flex jui-flex-col jui-space-y-4">
            <PasswordInput
              placeholder="Password"
              value={password}
              autoComplete="new-password"
              onChange={setPassword}
              error={errors?.password}
            />

            <PasswordInput
              placeholder="Confirm Password"
              value={confirmPassword}
              autoComplete="new-password"
              onChange={setConfirmPassword}
              error={errors?.confirmPassword}
            />
          </div>
        </div>

        <div className="jui-flex jui-flex-col jui-space-y-4 jui-w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || !password || !confirmPassword}
            label="Continue"
            className="w-full"
          />

          {loginLinkClicked && (
            <div className="jui-flex jui-justify-center jui-space-x-1">
              <Typography style="caption" className="jui-text-primary-600">
                Already registered?
              </Typography>

              <Anchor
                style="caption"
                onClick={loginLinkClicked}
                className="jui-text-secondary-400"
              >
                Log in here.
              </Anchor>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
