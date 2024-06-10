import { Typography } from '../atoms/Typography'
import { IconSelector } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { Modal } from '../atoms/Modal'
import { Button } from '../atoms/Button'

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
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="space-y-4 text-center">
          <Typography style="subtitle1">Pick something</Typography>

          <div className="space-y-2">
            <Button onClick={onClick('week')} label="Week" className="w-full"/>
            <Button onClick={onClick('month')} label="Month" className="w-full"/>
            <Button onClick={onClick('quarter')} label="Quarter" className="w-full"/>
          </div>
        </div>
      </Modal>

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
