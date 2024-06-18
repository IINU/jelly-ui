import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function DashboardNav({ children }: Props) {
  return (
    <div className="bg-white w-full py-2 flex justify-center border-b border-primary-200">
      <div className="max-w-[900px] w-full flex">
        {children}
      </div>
    </div>
  )
}
