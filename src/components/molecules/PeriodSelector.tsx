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
        className="jui-py-2 jui-text-secondary-400 jui-cursor-pointer jui-flex jui-justify-center jui-bg-primary-50"
        onClick={() => setShowModal(true)}
      >
        <div className="jui-flex jui-text-center jui-justify-center jui-space-x-1 jui-w-full">
          <div className="jui-flex jui-space-x-1 jui-items-center jui-min-w-0 jui-px-2">
            <Typography style="button" className="jui-capitalize jui-flex-1 jui-text-ellipsis jui-overflow-hidden jui-whitespace-nowrap">
              {labelExtractor(period)}
            </Typography>

            <IconSelector/>
          </div>
        </div>
      </div>
    </>
  )
}
