import { ComponentType, ComponentProps } from 'react'

type Props<T extends ComponentType<any>> = {
  component: T
} & ComponentProps<T>

export function OnboardingShowcase<
  T extends ComponentType<any>
>({ component: Component, ...props }: Props<T>) {
  return (
    <div className="min-h-full lg:min-h-max p-4 flex justify-center items-center lg:w-full">
      <div className="max-w-96 lg:max-w-max w-full">
        <Component {...props} />
      </div>
    </div>
  )
}
