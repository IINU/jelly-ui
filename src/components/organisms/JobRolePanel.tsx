import { Button } from '../atoms/Button'
import { JellyLogoPrimary } from '../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../atoms/Typography'
import { useEffect, useState } from 'react'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'
import { CardButton } from '../atoms/CardButton'
import {
  IconBriefcase,
  IconBuildingStore,
  IconChefHat,
  IconClipboardText,
  IconCoins,
  IconToolsKitchen,
} from '@tabler/icons-react'

type Role = 'head-chef' | 'chef' | 'manager' | 'accounting' | 'foh' | 'owner'

export type JobRoleData = {
  role: Role
}

type Errors = Partial<Record<keyof JobRoleData, string>>

type Props = {
  jobRole: (data: JobRoleData) => void
  onboarding?: boolean
  loading?: boolean
  errors?: Errors
}

export function JobRolePanel({
  jobRole,
  loading,
  onboarding = true,
  errors: propErrors,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(propErrors || null)
  const [role, setRole] = useState<Role | null>(null)

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(propErrors || null), [propErrors])

  function ctaClicked() {
    setErrors(null)
    if (!role) return setErrors({ role: 'This is required.' })

    jobRole({ role })
  }

  return (
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col space-y-2">
            <Typography style="h6">Tell us about yourself</Typography>

            {onboarding
              ? (
                <Typography style="caption" className="text-primary-600">
                  Let us personalize your onboarding. Select all the roles that apply
                  to you.
                </Typography>
              )
              : (
                <Typography style="caption" className="text-primary-600">
                  We'd like to know more about you. Select all the roles that
                  apply to you.
                </Typography>
              )}
          </div>

          <div className="space-y-2">
            <div className="flex space-x-2">
              <CardButton
                label="Head Chef"
                icon={IconChefHat}
                active={role === 'head-chef'}
                onClick={() => setRole('head-chef')}
              />

              <CardButton
                label="Chef"
                icon={IconToolsKitchen}
                active={role === 'chef'}
                onClick={() => setRole('chef')}
              />
            </div>

            <div className="flex space-x-2">
              <CardButton
                label="Manager"
                icon={IconBriefcase}
                active={role === 'manager'}
                onClick={() => setRole('manager')}
              />

              <CardButton
                label="Accounting"
                icon={IconCoins}
                active={role === 'accounting'}
                onClick={() => setRole('accounting')}
              />
            </div>

            <div className="flex space-x-2">
              <CardButton
                label="Front of house"
                icon={IconClipboardText}
                active={role === 'foh'}
                onClick={() => setRole('foh')}
              />

              <CardButton
                label="Owner"
                icon={IconBuildingStore}
                active={role === 'owner'}
                onClick={() => setRole('owner')}
              />
            </div>
          </div>

          {errors?.role && (
            <div className="text-left px-2">
              <Typography style="caption" className="text-error-400">
                {errors.role}
              </Typography>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || !role}
            label="Continue"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
