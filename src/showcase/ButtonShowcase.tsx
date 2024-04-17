import { Button, ButtonStyle } from '../components/atoms/Button'
import { IconPlus } from '@tabler/icons-react'

type Props = {
  style: ButtonStyle,
}

export function ButtonShowcase({ style }: Props) {
  function onClick() {
    console.log('Clicked.')
  }

  return (
    <div className="flex">
      <div className="px-16 py-8 bg-black space-y-2">
        <Button style={style} onClick={onClick} label="Button" />
        <Button style={style} onClick={onClick} label="Button" icon={IconPlus} />
        <Button style={style} onClick={onClick} label="Button" loading={true} />
        <Button style={style} onClick={onClick} icon={IconPlus} />
      </div>

      <div className="px-16 py-8 bg-white space-y-2">
        <Button style={style} onClick={onClick} label="Button" />
        <Button style={style} onClick={onClick} label="Button" icon={IconPlus} />
        <Button style={style} onClick={onClick} label="Button" loading={true} />
        <Button style={style} onClick={onClick} icon={IconPlus} />
      </div>
    </div>
  )
}