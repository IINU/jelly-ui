import { BaseInput, InputProps } from './BaseInput'

type Props = Omit<InputProps, 'type'> & {
  min?: number
  max?: number
  step?: number
}

export function NumberInput(props: Props) {
  return (
    <BaseInput {...props} type="number"/>
  )
}
