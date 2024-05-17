import { Button } from '../../atoms/Button'
import { JellyLogoPrimary } from '../../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../../atoms/Typography'
import { useEffect, useState } from 'react'
import { useEnterSubmit } from '../../../hooks/useEnterSubmit'
import { TextInput } from '../../atoms/TextInput'

export type BusinessDetailsData = {
  name: string
  email: string
}
type Errors = Partial<Record<keyof BusinessDetailsData, string>>

type Props = {
  businessDetails: (data: BusinessDetailsData) => void
  onChange?: (data: BusinessDetailsData) => void
  loading?: boolean
  errors?: Errors
} & Partial<BusinessDetailsData>

export function BusinessDetailsPanel({
  businessDetails,
  loading,
  onChange,
  errors: errorsProp,
  name: nameProp,
  email: emailProp,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(errorsProp || null)
  const [name, setName] = useState(nameProp || '')
  const [email, setEmail] = useState(emailProp || '')

  useEnterSubmit({ ctaClicked })
  useEffect(() => setName(nameProp || ''), [nameProp])
  useEffect(() => setEmail(emailProp || ''), [emailProp])
  useEffect(() => onChange?.({ name, email }), [name, email, onChange])

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
        <JellyLogoPrimary/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col space-y-2">
            <Typography style="h6">Business Details</Typography>

            <Typography style="caption" className="text-primary-600">
              Jelly is exclusive to registered businesses.
            </Typography>
          </div>

          <div className="flex flex-col space-y-4">
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
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || !name || !email}
            label="Continue"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
