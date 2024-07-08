import imageSrc from '../../assets/invoices.png'
import { Typography } from '../atoms/Typography'

export function TodoNoTasks() {
  return (
    <div className="px-4 pb-12 flex items-center h-full">
      <div className="flex flex-col items-center">
        <img
          className="w-44 h-44 mix-blend-darken"
          src={imageSrc}
          alt="Checklist & Calculator"
        />

        <div className="space-y-2 text-center">
          <Typography style="h6" className="text-primary-900">
            Nothing to do!
          </Typography>

          <Typography style="caption" className="text-primary-600">
            There’s no tasks to do at the moment, create new tasks to add some to-do
            items here and keep track of your things.
          </Typography>
        </div>
      </div>
    </div>
  )
}
