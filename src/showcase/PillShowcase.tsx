import { Pill, PillVariant } from '../components/atoms/Pill'

type Props = {
  variant: PillVariant,
  label: string
}

export function PillShowcase({ variant, label = 'Invoice' }: Props) {
  return (
    <div className="jui-w-full jui-flex jui-flex-col">
      <div className="jui-w-full jui-p-8 jui-bg-white jui-space-y-2">
        <Pill variant={variant} label={label} />
      </div>
    </div>
  )
}
