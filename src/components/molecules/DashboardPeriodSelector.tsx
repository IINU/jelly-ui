import { Typography } from '../atoms/Typography'
import { IconCalendarMonth, IconSelector } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { ActionModal } from './ActionModal'

export type DashboardPeriod = 'week' | 'month' | 'quarter'

type Props = {
  value: DashboardPeriod
  onChange: (period: DashboardPeriod) => void
}

export function DashboardPeriodSelector({ value, onChange }: Props) {
  const [period, setPeriod] = useState<DashboardPeriod>(value)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setPeriod(value)
    setShowModal(false)
  }, [value])

  function onClick(period: DashboardPeriod) {
    return () => {
      onChange(period)
      setShowModal(false)
    }
  }

  return (
    <>
      <ActionModal
        actions={[
          {
            title: 'Calendar Week',
            subtitle: 'From Monday to Sunday',
            onClick: onClick('week'),
            icon: IconCalendarMonth,
          },
          {
            title: 'Calendar Month',
            subtitle: 'From the 1st to the last day of each month',
            onClick: onClick('month'),
            icon: IconCalendarMonth,
          },
          {
            title: 'Calendar Quarter',
            subtitle: 'From the 1st of Month 1 to the last day of Month 3',
            onClick: onClick('quarter'),
            icon: IconCalendarMonth,
          },
        ]}
        open={showModal}
        onClose={() => setShowModal(false)}
      />

      <div
        className="py-2 text-secondary-400 cursor-pointer flex justify-center"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center space-x-1">
          <Typography style="button" className="capitalize">
            This Calendar {period}
          </Typography>

          <IconSelector/>
        </div>
      </div>
    </>
  )
}
