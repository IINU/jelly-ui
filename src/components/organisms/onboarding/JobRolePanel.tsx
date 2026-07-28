import { Button } from '../../atoms/Button'
import { JellyLogoPrimary } from '../../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../../atoms/Typography'
import { ComponentProps, useEffect, useState } from 'react'
import { useEnterSubmit } from '../../../hooks/useEnterSubmit'
import { CardButton } from '../../atoms/CardButton'

// The code identifies the role to the caller's API; the panel only groups
// buttons by it, so it stays generic and the caller keeps its own enum.
export type JobRoleOption<T extends string> = {
  code: T
  name: string
  icon: ComponentProps<typeof CardButton>['icon']
}

export type JobRoleData<T extends string = string> = {
  roles: T[]
}

type Errors = Partial<Record<keyof JobRoleData, string>>

type Props<T extends string> = {
  roles: JobRoleOption<T>[]
  jobRoles: (data: JobRoleData<T>) => void
  onboarding?: boolean
  loading?: boolean
  errors?: Errors
}

export function JobRolePanel<T extends string>({
  roles: options,
  jobRoles,
  loading,
  onboarding = true,
  errors: propErrors,
}: Props<T>) {
  const [errors, setErrors] = useState<Errors | null>(propErrors || null)
  const [roles, setRoles] = useState<T[]>([])

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(propErrors || null), [propErrors])

  function ctaClicked() {
    setErrors(null)
    if (!roles.length) return setErrors({ roles: 'This is required.' })

    jobRoles({ roles })
  }

  function toggleRole(code: T) {
    if (!roles.includes(code)) {
      return setRoles([...roles, code])
    }

    const newRoles = [...roles.filter((r) => r !== code)]
    setRoles(newRoles)
  }

  return (
    <div className="jui-shadow jui-w-full jui-rounded-md">
      <div className="jui-rounded-t-md jui-bg-white jui-p-4 jui-flex jui-flex-col jui-items-center jui-justify-center">
        <JellyLogoPrimary />
      </div>

      <div className="jui-flex jui-flex-col jui-items-center jui-space-y-8 jui-rounded-b-md jui-bg-primary-50 jui-px-4 jui-py-8 jui-text-center">
        <div className="jui-flex jui-flex-col jui-space-y-6 jui-w-full">
          <div className="jui-flex jui-flex-col jui-space-y-2">
            <Typography style="h6" className="jui-text-primary-900">
              Tell us about yourself
            </Typography>

            {onboarding ? (
              <Typography style="caption" className="jui-text-primary-600">
                Let us personalize your onboarding. Select all the roles that
                apply to you.
              </Typography>
            ) : (
              <Typography style="caption" className="jui-text-primary-600">
                We'd like to know more about you. Select all the roles that
                apply to you.
              </Typography>
            )}
          </div>

          <div className="jui-grid jui-grid-cols-2 jui-gap-2">
            {options.map((option) => (
              <CardButton
                key={option.code}
                label={option.name}
                icon={option.icon}
                active={roles.includes(option.code)}
                onClick={() => toggleRole(option.code)}
              />
            ))}
          </div>

          {errors?.roles && (
            <div className="jui-text-left jui-px-2">
              <Typography style="caption" className="jui-text-error-400">
                {errors.roles}
              </Typography>
            </div>
          )}
        </div>

        <div className="jui-flex jui-flex-col jui-space-y-2 jui-w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || !roles.length}
            label="Continue"
            className="jui-w-full"
          />
        </div>
      </div>
    </div>
  )
}
