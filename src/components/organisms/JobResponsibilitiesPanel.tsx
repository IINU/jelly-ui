import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { useEffect, useState } from 'react'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'
import { ToggleButton } from '../atoms/ToggleButton'

type Field = 'responsibilities'
type Errors = Partial<Record<Field, string>>

export type Responsibility = {
  name: string
  value: boolean
}

type Props<T extends string> = {
  responsibilities: Record<T, Responsibility>
  submit: (data: Record<T, Responsibility>) => void
  loading?: boolean
  errors?: Errors
}

function toEntries<T extends string, U>(obj: Record<T, U>) {
  const result: [T, U][] = []

  for (const key in obj) {
    result.push([key, obj[key]])
  }

  return result
}

function values<T extends string, U>(obj: Record<T, U>) {
  const result: U[] = []

  for (const key in obj) {
    result.push(obj[key])
  }

  return result
}

export function JobResponsibilitiesPanel<T extends string>({
  submit,
  loading,
  errors: errorsProp,
  responsibilities: responsibilitiesProp,
}: Props<T>) {
  const [errors, setErrors] = useState<Errors | null>(errorsProp || null)
  const [responsibilities, setResponsibilities] = useState<
    Record<T, Responsibility>
  >(responsibilitiesProp)

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(errorsProp || null), [errorsProp])
  useEffect(() => setResponsibilities(responsibilitiesProp), [responsibilitiesProp])

  function ctaClicked() {
    submit(responsibilities)
  }

  function updateResponsibility(key: T, value: boolean) {
    const copy = { ...responsibilities }
    copy[key].value = value

    setResponsibilities(copy)
  }

  return (
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogo/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col space-y-2">
            <Typography style="h6">Tell us about your work</Typography>

            <Typography style="caption" className="text-primary-600">
              Select all the areas of responsibility that apply to you.
            </Typography>
          </div>

          <div className="flex flex-col">
            {toEntries(responsibilities).map(([key, { name, value }]) => (
              <div key={key} className="flex justify-between items-center p-3 border-b border-primary-100">
                <Typography style="caption">
                  {name}
                </Typography>

                <ToggleButton
                  value={value}
                  size="small"
                  onChange={(newValue) => updateResponsibility(key, newValue)}
                />
              </div>
            ))}
          </div>

          {errors?.responsibilities && (
            <div className="text-left px-2">
              <Typography style="caption" className="text-error-400">
                {errors.responsibilities}
              </Typography>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || values(responsibilities).every(r => !r.value)}
            label="CONTINUE"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
