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
      <div className="jui-px-16 jui-py-8 jui-bg-black jui-space-y-2">
        <Button style={style} onClick={onClick} label="Button" />
        <Button style={style} onClick={onClick} label="Button" icon={IconPlus} />
        <Button style={style} onClick={onClick} label="Button" loading={true} />
        <Button style={style} onClick={onClick} icon={IconPlus} />
      </div>

      <div className="jui-px-16 jui-py-8 jui-bg-white jui-space-y-2">
        <Button style={style} onClick={onClick} label="Button" />
        <Button style={style} onClick={onClick} label="Button" icon={IconPlus} />
        <Button style={style} onClick={onClick} label="Button" loading={true} />
        <Button style={style} onClick={onClick} icon={IconPlus} />
      </div>
    </div>
  )
}
