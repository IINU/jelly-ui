import { BaseInput, InputProps } from './BaseInput'

type Props = Omit<InputProps, 'type'>

export function NumberInput(props: Props) {
  return (
    <BaseInput {...props} type="number"/>
  )
}
