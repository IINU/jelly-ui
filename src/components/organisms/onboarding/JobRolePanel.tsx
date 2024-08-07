import { Button } from '../../atoms/Button'
import { JellyLogoPrimary } from '../../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../../atoms/Typography'
import { useEffect, useState } from 'react'
import { useEnterSubmit } from '../../../hooks/useEnterSubmit'
import { CardButton } from '../../atoms/CardButton'
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
  roles: Role[]
}

type Errors = Partial<Record<keyof JobRoleData, string>>

type Props = {
  jobRoles: (data: JobRoleData) => void
  onboarding?: boolean
  loading?: boolean
  errors?: Errors
}

export function JobRolePanel({
  jobRoles,
  loading,
  onboarding = true,
  errors: propErrors,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(propErrors || null)
  const [roles, setRoles] = useState<Role[]>([])

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(propErrors || null), [propErrors])

  function ctaClicked() {
    setErrors(null)
    if (!roles) return setErrors({ roles: 'This is required.' })

    jobRoles({ roles })
  }

  function toggleRole(role: Role) {
    if (!roles.includes(role)) {
      return setRoles([...roles, role])
    }

    const newRoles = [...roles.filter(r => r !== role)]
    setRoles(newRoles)
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
              Tell us about yourself
            </Typography>

            {onboarding
              ? (
                <Typography style="caption" className="jui-text-primary-600">
                  Let us personalize your onboarding. Select all the roles that
                  apply to you.
                </Typography>
              )
              : (
                <Typography style="caption" className="jui-text-primary-600">
                  We'd like to know more about you. Select all the roles that
                  apply to you.
                </Typography>
              )}
          </div>

          <div className="jui-space-y-2">
            <div className="jui-flex jui-space-x-2">
              <CardButton
                label="Head Chef"
                icon={IconChefHat}
                active={roles.includes('head-chef')}
                onClick={() => toggleRole('head-chef')}
              />

              <CardButton
                label="Chef"
                icon={IconToolsKitchen}
                active={roles.includes('chef')}
                onClick={() => toggleRole('chef')}
              />
            </div>

            <div className="jui-flex jui-space-x-2">
              <CardButton
                label="Manager"
                icon={IconBriefcase}
                active={roles.includes('manager')}
                onClick={() => toggleRole('manager')}
              />

              <CardButton
                label="Accounting"
                icon={IconCoins}
                active={roles.includes('accounting')}
                onClick={() => toggleRole('accounting')}
              />
            </div>

            <div className="jui-flex jui-space-x-2">
              <CardButton
                label="Front of house"
                icon={IconClipboardText}
                active={roles.includes('foh')}
                onClick={() => toggleRole('foh')}
              />

              <CardButton
                label="Owner"
                icon={IconBuildingStore}
                active={roles.includes('owner')}
                onClick={() => toggleRole('owner')}
              />
            </div>
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
