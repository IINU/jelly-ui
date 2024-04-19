import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { MouseEventHandler, useEffect, useState } from 'react'
import { Anchor } from '../atoms/Anchor'
import { PasswordInput } from '../atoms/PasswordInput'

type Field = 'password' | 'confirmPassword'
type Errors = Partial<Record<Field, string>>

type Props = {
  newPassword: (data: Record<Field, string>) => void
  loginLinkClicked: MouseEventHandler
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
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogo/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-4 w-full">
          <Typography style="h6">New Password</Typography>

          <Typography style="caption" className="text-primary-600">
            We take pride in best-in-class-security. Password must be 8 or more
            characters long.
          </Typography>

          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={setPassword}
            error={errors?.password}
          />

          <PasswordInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            error={errors?.confirmPassword}
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Button
            style={loading ? 'disabled' : 'primary'}
            onClick={ctaClicked}
            label="CONFIRM"
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
