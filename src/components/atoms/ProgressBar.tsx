type Props = {
  percentage: number
}

export function ProgressBar({ percentage }: Props) {
  if (percentage === 0) {
    percentage = 0.02
  }

  return (
    <div className="h-2 w-full rounded-full bg-primary-100">
      <div
        className="h-2 rounded-full bg-success-400"
        style={{ width: `${percentage * 100}%` }}
      />
    </div>
  )
}
