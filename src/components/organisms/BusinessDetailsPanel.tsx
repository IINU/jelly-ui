import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { useEffect, useState } from 'react'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'
import { TextInput } from '../atoms/TextInput'

type Field = 'name' | 'email'
type Errors = Partial<Record<Field, string>>

type Props = {
  businessDetails: (data: Record<Field, string>) => void
  loading?: boolean
  errors?: Errors
}

export function BusinessDetailsPanel({
  businessDetails,
  loading,
  errors: propErrors,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(propErrors || null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(propErrors || null), [propErrors])

  function ctaClicked() {
    setErrors(null)

    const calcErrors: Errors = {}
    if (!name) calcErrors.name = 'This is required.'
    if (!email) calcErrors.email = 'This is required.'

    if (Object.values(calcErrors).filter(Boolean).length) {
      setErrors(calcErrors)
      return
    }

    businessDetails({ name, email })
  }

  return (
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogo/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-4 w-full">
          <Typography style="h6">Business Details</Typography>

          <Typography style="caption" className="text-primary-600">
            Jelly is exclusive to registered businesses.
          </Typography>

          <TextInput
            placeholder="Site name"
            value={name}
            onChange={setName}
            error={errors?.name}
          />

          <TextInput
            placeholder="Email"
            value={email}
            autoComplete="email"
            onChange={setEmail}
            error={errors?.email}
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Button
            style={loading ? 'disabled' : 'primary'}
            onClick={ctaClicked}
            label="CONTINUE"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
