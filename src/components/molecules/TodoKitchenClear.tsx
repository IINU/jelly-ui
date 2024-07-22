import imageSrc from '../../assets/trophy.png'
import { Typography } from '../atoms/Typography'

export function TodoKitchenClear() {
  return (
    <div className="flex flex-col items-center py-4">
      <img
        className="w-44 h-44 mix-blend-darken"
        src={imageSrc}
        alt="Checklist & Calculator"
      />

      <div className="space-y-2 text-center px-4">
        <Typography style="h6" className="text-primary-900">
          Kitchen clear!
        </Typography>

        <Typography style="caption" className="text-primary-600">
          Use this space to create and manage tasks for you and other team
          members.
        </Typography>
      </div>
    </div>
  )
}
