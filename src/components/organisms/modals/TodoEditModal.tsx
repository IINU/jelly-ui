import { Modal } from '../../atoms/Modal'
import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'
import { TextInput } from '../../atoms/TextInput'
import { TextareaInput } from '../../atoms/TextareaInput'
import { DropdownInput } from '../../atoms/DropdownInput'
import { useEffect, useState } from 'react'

export type TodoEditData<T> = {
  title: string
  description: string | null
  assignee: T | null
}

type Errors<T> = Partial<Record<keyof TodoEditData<T>, string>>

type Props<T> = {
  open: boolean
  onClose: () => void
  onSave: (data: TodoEditData<T>) => Promise<void>
  assignees: T[]
  assigneeToId: (a: T) => number | string
  assigneeToLabel: (a: T) => string
} & TodoEditData<T>

export function TodoEditModal<T>({
  open,
  onClose,
  onSave,
  assignees,
  assigneeToId,
  assigneeToLabel,
  title: titleProp,
  description: descriptionProp,
  assignee: assigneeProp,
}: Props<T>) {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Errors<T> | null>(null)
  const [title, setTitle] = useState<string>(titleProp)
  const [description, setDescription] = useState<string>(descriptionProp ?? '')
  const [assignee, setAssignee] = useState<T | null>(assigneeProp)

  useEffect(() => setTitle(titleProp), [titleProp])
  useEffect(() => setAssignee(assigneeProp), [assigneeProp])
  useEffect(() => setDescription(descriptionProp ?? ''), [descriptionProp])

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
    <Modal
      open={open}
      onClose={() => {
        setTitle(titleProp)
        setDescription(descriptionProp ?? '')
        setAssignee(assigneeProp)
        onClose()
      }}
    >
      <div className="space-y-6">
        <Typography style="h6">Edit task</Typography>

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
          label="Save"
        />
      </div>
    </Modal>
  )
}
