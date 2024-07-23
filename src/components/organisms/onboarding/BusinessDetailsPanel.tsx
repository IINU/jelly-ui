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
    <div className="jui-shadow jui-w-full jui-rounded-md">
      <div className="jui-rounded-t-md jui-bg-white jui-p-4 jui-flex jui-flex-col jui-items-center jui-justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="jui-flex jui-flex-col jui-items-center jui-space-y-8 jui-rounded-b-md jui-bg-primary-50 jui-px-4 jui-py-8 jui-text-center">
        <div className="jui-flex jui-flex-col jui-space-y-6 jui-w-full">
          <div className="jui-flex jui-flex-col jui-space-y-2">
            <Typography style="h6" className="jui-text-primary-900">
              Business Details
            </Typography>

            <Typography style="caption" className="jui-text-primary-600">
              Jelly is exclusive to registered businesses.
            </Typography>
          </div>

          <div className="jui-flex jui-flex-col jui-space-y-4">
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

        <div className="jui-flex jui-flex-col jui-space-y-2 jui-w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || !name || !email}
            label="Continue"
            className="jui-w-full"
          />
        </div>
      </div>
    </div>
  )
}
