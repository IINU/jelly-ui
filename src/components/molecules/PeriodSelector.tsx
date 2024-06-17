import { Typography } from '../atoms/Typography'
import { IconSelector } from '@tabler/icons-react'
import { ComponentType, useEffect, useState } from 'react'
import { ActionModal } from './ActionModal'

type Props<T> = {
  periods: T[]
  value: T
  onChange: (period: T) => void
  labelExtractor: (period: T) => string
  titleExtractor: (period: T) => string
  subtitleExtractor: (period: T) => string
  iconExtractor: (period: T) => ComponentType<{ className?: string }>
}

export function PeriodSelector<T>({
  value,
  onChange,
  periods,
  labelExtractor,
  titleExtractor,
  subtitleExtractor,
  iconExtractor,
}: Props<T>) {
  const [period, setPeriod] = useState<T>(value)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setPeriod(value)
    setShowModal(false)
  }, [value])

  function onClick(period: T) {
    return () => {
      onChange(period)
      setShowModal(false)
    }
  }

  return (
    <>
      <ActionModal
        actions={
          periods.map(
            (period) => ({
              title: titleExtractor(period),
              subtitle: subtitleExtractor(period),
              onClick: onClick(period),
              icon: iconExtractor(period),
            }),
          )
        }
        open={showModal}
        onClose={() => setShowModal(false)}
      />

      <div
        className="py-2 text-secondary-400 cursor-pointer flex justify-center bg-primary-50 "
        onClick={() => setShowModal(true)}
      >
        <div className="flex text-center justify-center space-x-1 w-full">
          <div className="flex space-x-1 items-center min-w-0 px-2">
            <Typography style="button" className="capitalize flex-1 text-ellipsis overflow-hidden whitespace-nowrap">
              {labelExtractor(period)}
            </Typography>

            <IconSelector/>
          </div>
        </div>
      </div>
    </>
  )
}
