import { IconChefHat } from '@tabler/icons-react'
import { CardButton } from '../components/atoms/CardButton'
import { MouseEventHandler } from 'react'

type Props = {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function CardButtonShowcase({ label, onClick }: Props) {
  return (
    <div className="flex flex-col w-96">
      <div className="flex px-8 py-8 bg-white space-x-2 w-96">
        <CardButton
          label={label}
          icon={IconChefHat}
          active={false}
          onClick={onClick}
        />

        <CardButton
          label={label}
          icon={IconChefHat}
          active={true}
          onClick={onClick}
        />
      </div>

      <div className="flex px-8 py-8 bg-black space-x-2 w-96">
        <CardButton
          label={label}
          icon={IconChefHat}
          active={false}
          onClick={onClick}
        />

        <CardButton
          label={label}
          icon={IconChefHat}
          active={true}
          onClick={onClick}
        />
      </div>
    </div>
  )
}
