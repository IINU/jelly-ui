import imageSrc from '../../assets/trophy.png'
import { Typography } from '../atoms/Typography'

export function TodoKitchenClear() {
  return (
    <div className="jui-flex jui-flex-col jui-items-center jui-py-4">
      <img
        className="jui-w-44 jui-h-44 jui-mix-blend-darken"
        src={imageSrc}
        alt="Checklist & Calculator"
      />

      <div className="jui-space-y-2 jui-text-center jui-px-4">
        <Typography style="h6" className="jui-text-primary-900">
          Kitchen clear!
        </Typography>

        <Typography style="caption" className="jui-text-primary-600">
          Use this space to create and manage tasks for you and other team
          members.
        </Typography>
      </div>
    </div>
  )
}
