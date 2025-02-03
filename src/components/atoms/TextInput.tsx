import { BaseInput, InputProps } from './BaseInput'

type Props = Omit<InputProps, 'type'>

export function TextInput(props: Props) {
  return (
    <BaseInput {...props} type="text" inputMode="decimal"/>
  )
}
