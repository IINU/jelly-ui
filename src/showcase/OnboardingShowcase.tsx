import { ComponentType, ComponentProps } from 'react'

type Props<T extends ComponentType<any>> = {
  component: T
} & ComponentProps<T>

export function OnboardingShowcase<
  T extends ComponentType<any>
>({ component: Component, ...props }: Props<T>) {
  return (
    <div className="min-h-full p-4 flex justify-center items-center">
      <div className="max-w-96 w-full">
        <Component {...props} />
      </div>
    </div>
  )
}
