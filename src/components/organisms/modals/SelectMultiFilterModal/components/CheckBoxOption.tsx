type Props = {
  checked: boolean
  label: string
  description?: string
  onClick: () => void
}

export function CheckBoxOption({
  checked,
  label,
  description,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="jui-flex jui-items-center jui-gap-2 jui-cursor-pointer"
    >
      <div className="jui-w-6 jui-h-6 jui-flex jui-shrink-0 jui-items-center jui-justify-center jui-rounded-[4px] jui-border-2 jui-border-primary-100 jui-bg-white jui-box-border">
        {checked && (
          <svg
            width="18"
            height="15"
            viewBox="-2 -2 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="jui-text-secondary-400"
          >
            <path
              d="M0 5.5L5 11L14 0"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {description ? (
        <div className="jui-flex jui-flex-col">
          <span className="jui-font-lato jui-font-bold jui-text-sm jui-leading-[18px] jui-tracking-[0px] jui-align-middle jui-text-primary-900">
            {label}
          </span>

          <span className="jui-font-rubik jui-font-normal jui-text-base jui-leading-none jui-tracking-[0px] jui-text-primary-800">
            {description}
          </span>
        </div>
      ) : (
        <span className="jui-font-lato jui-font-bold jui-text-sm jui-leading-[18px] jui-tracking-[0px] jui-align-middle jui-text-primary-900">
          {label}
        </span>
      )}
    </div>
  )
}
