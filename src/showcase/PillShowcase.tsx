import { Pill, PillVariant } from '../components/atoms/Pill'

type Props = {
  variant: PillVariant,
}

export function PillShowcase({ variant }: Props) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full p-8 bg-white space-y-2">
        <Pill variant={variant} label="Steve Jobs" />
      </div>
    </div>
  )
}
