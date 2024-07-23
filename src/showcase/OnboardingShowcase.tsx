import { ComponentType, ComponentProps } from 'react'

type Props<T extends ComponentType<any>> = {
  component: T
} & ComponentProps<T>

export function OnboardingShowcase<
  T extends ComponentType<any>
>({ component: Component, ...props }: Props<T>) {
  return (
    <div className="jui-min-h-full jui-p-4 jui-flex jui-justify-center jui-items-center">
      <div className="jui-max-w-96 jui-w-full">
        <Component {...props} />
      </div>
    </div>
  )
}
