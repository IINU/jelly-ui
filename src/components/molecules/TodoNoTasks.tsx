import imageSrc from '../../assets/invoices.png'
import { Typography } from '../atoms/Typography'

export function TodoNoTasks() {
  return (
    <div className="jui-px-4 jui-pb-12 jui-flex jui-items-center jui-h-full">
      <div className="jui-flex jui-flex-col jui-items-center">
        <img
          className="jui-w-44 jui-h-44 jui-mix-blend-darken"
          src={imageSrc}
          alt="Checklist & Calculator"
        />

        <div className="jui-space-y-2 jui-text-center">
          <Typography style="h6" className="jui-text-primary-900">
            Nothing to do!
          </Typography>

          <Typography style="caption" className="jui-text-primary-600">
            There’s no tasks to do at the moment, create new tasks to add some
            to-do items here and keep track of your things.
          </Typography>
        </div>
      </div>
    </div>
  )
}
