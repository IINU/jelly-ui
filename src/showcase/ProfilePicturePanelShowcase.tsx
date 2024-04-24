import { ProfilePicturePanel } from '../components/organisms/ProfilePicturePanel'

type Props = {
  onClick: (...args: unknown[]) => void
}

export function ProfilePicturePanelShowcase({ onClick }: Props) {
  return (
    <div className="h-[1200px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <ProfilePicturePanel submit={onClick}/>
    </div>
  )
}
