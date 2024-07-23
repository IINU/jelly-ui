type Props = {
  percentage: number
}

export function ProgressBar({ percentage }: Props) {
  if (percentage === 0) {
    percentage = 0.02
  }

  return (
    <div className="jui-h-2 jui-w-full jui-rounded-full jui-bg-primary-100">
      <div
        className="jui-h-2 jui-rounded-full jui-bg-success-400"
        style={{ width: `${percentage * 100}%` }}
      />
    </div>
  )
}
