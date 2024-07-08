import { Modal } from '../../atoms/Modal'
import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'
import { TextInput } from '../../atoms/TextInput'
import { TextareaInput } from '../../atoms/TextareaInput'
import { DropdownInput } from '../../atoms/DropdownInput'
import { useState } from 'react'

export type TodoCreateData<T> = {
  title: string
  description: string | null
  assignee: T | null
}

type Errors<T> = Partial<Record<keyof TodoCreateData<T>, string>>

type Props<T> = {
  open: boolean
  onClose: () => void
  onSave: (data: TodoCreateData<T>) => Promise<void>
  assignees: T[]
  assigneeToId: (a: T) => number | string
  assigneeToLabel: (a: T) => string
}

export function TodoCreateModal<T>({
  open,
  onClose,
  onSave,
  assignees,
  assigneeToId,
  assigneeToLabel,
}: Props<T>) {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Errors<T> | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [assignee, setAssignee] = useState<T | null>(null)

  async function ctaClicked() {
    if (loading) return

    setErrors(null)

    if (!title.trim()) return setErrors({ title: 'This is required.' })

    setLoading(true)
    try {
      await onSave({
        title,
        description: description.trim() ? description.trim() : null,
        assignee,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="space-y-6">
        <Typography style="h6">Add a new task</Typography>

        <div className="space-y-4">
          <div className="space-y-2">
            <Typography style="caption" className="text-primary-800">
              Title
            </Typography>

            <TextInput
              placeholder="Enter a title for your task."
              value={title}
              error={errors?.title}
              onChange={setTitle}
            />
          </div>

          <div className="space-y-2">
            <Typography style="caption" className="text-primary-800">
              Description (Optional)
            </Typography>

            <TextareaInput
              placeholder="Add notes and instructions for completing the task"
              value={description}
              error={errors?.description}
              onChange={setDescription}
            />
          </div>

          <div className="space-y-2">
            <Typography style="caption" className="text-primary-800">
              Assignee (Optional)
            </Typography>

            <DropdownInput
              placeholder="Please select..."
              error={errors?.assignee}
              value={assignee}
              options={assignees}
              optionToId={assigneeToId}
              optionToLabel={assigneeToLabel}
              onChange={setAssignee}
            />
          </div>
        </div>

        <Button
          onClick={ctaClicked}
          loading={loading}
          disabled={!title.trim() || loading}
          className="w-full mt-4"
          label="Create Task"
        />
      </div>
    </Modal>
  )
}
