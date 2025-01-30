import { DateInput } from '../components/atoms/DateInput'
import { useState } from 'react'

type Props = {
  error: string
}

export function DateInputShowcase({ error }: Props) {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="jui-flex">
      <div className="jui-py-8 jui-bg-white jui-space-y-2 jui-w-[20rem]">
        <DateInput
          placeholder="Select date"
          value={date}
          onChange={setDate}
          error={error}
          className="jui-w-full"
        />

        <DateInput
          placeholder="Select date"
          value={date}
          onChange={setDate}
          error={error}
          loading={true}
        />

        <DateInput
          placeholder="Select date"
          value={date}
          onChange={setDate}
          error={error}
          disabled
        />
      </div>
    </div>
  )
}
