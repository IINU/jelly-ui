type Props = {
  active: boolean
  label: string
  onClick: () => void
}

export function RadioOption({ active, label, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="jui-flex jui-items-center jui-space-x-1 jui-cursor-pointer"
    >
      <div className="jui-w-6 jui-h-6 jui-flex jui-items-center jui-justify-center jui-border-2 jui-border-primary-200 jui-bg-white jui-rounded-full">
        <div
          className={`jui-w-3.5 jui-h-3.5 jui-rounded-full ${
            active ? 'jui-bg-secondary-400' : ''
          }`}
        />
      </div>

      <span className="jui-font-rubik jui-text-sm jui-text-primary-900">
        {label}
      </span>
    </div>
  )
}
