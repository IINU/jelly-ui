import { IconChefHat } from '@tabler/icons-react'
import { CardButton } from '../components/atoms/CardButton'
import { MouseEventHandler } from 'react'

type Props = {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function CardButtonShowcase({ label, onClick }: Props) {
  return (
    <div className="jui-flex jui-flex-col jui-w-96">
      <div className="jui-flex jui-px-8 jui-py-8 jui-bg-white jui-space-x-2 jui-w-96">
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

      <div className="jui-flex jui-px-8 jui-py-8 jui-bg-black jui-space-x-2 jui-w-96">
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
