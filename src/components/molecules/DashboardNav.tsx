import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function DashboardNav({ children }: Props) {
  return (
    <div className="jui-bg-white jui-w-full jui-py-2 jui-flex jui-justify-center jui-border-b jui-border-primary-200">
      <div className="jui-max-w-[900px] jui-w-full jui-flex">
        {children}
      </div>
    </div>
  )
}
