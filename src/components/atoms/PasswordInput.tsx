import { BaseInput, InputProps } from './BaseInput'

type Props = Omit<InputProps, 'type'>

export function PasswordInput(props: Props) {
  return (
    <BaseInput {...props} type="password"/>
  )
}
