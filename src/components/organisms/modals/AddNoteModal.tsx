import { useEffect, useState } from 'react'

import { Modal } from '../../atoms/Modal'
import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'
import { NoteVariant } from '../../molecules/Note'
import { Notes } from '../../molecules/Notes'
import { TextareaInput } from '../../atoms/TextareaInput'

export type AddNoteData = {
  note: string
}

type Props<T> = {
  title: string
  open: boolean
  onClose: () => void
  saveNote: (data: AddNoteData) => Promise<void>
  errors?: Partial<Record<keyof AddNoteData, string>>
  notes: T[]
  keyExtractor?: (note: T, index: number) => string | number
  titleExtractor: (note: T) => string
  bodyExtractor: (note: T) => string
  typeExtractor: (note: T) => NoteVariant
}

export function AddNoteModal<T>({
  title,
  open,
  onClose,
  errors: errorsProp,
  saveNote,
  notes,
  keyExtractor,
  titleExtractor,
  bodyExtractor,
  typeExtractor,
}: Props<T>) {
  const [errors, setErrors] = useState(errorsProp ?? {})
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => setErrors(errorsProp ?? {}), [errorsProp])

  async function handleButtonClick() {
    if (loading) return

    setErrors({})
    if (!note.trim()) setErrors({ note: 'This is required. ' })

    setLoading(true)
    try {
      await saveNote({ note })
      setNote('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      open={open}
      onClose={() => {
        setNote('')
        onClose()
      }}
    >
      <div className="space-y-12">
        <div className="space-y-6">
          <Typography style="h6">{title}</Typography>

          <div className="space-y-2.5">
            <Notes
              notes={notes}
              keyExtractor={keyExtractor}
              titleExtractor={titleExtractor}
              bodyExtractor={bodyExtractor}
              typeExtractor={typeExtractor}
            />

            <div className="space-y-2">
              <Typography style="caption" className="text-primary-800">
                #{notes.length + 1}
              </Typography>

              <TextareaInput
                placeholder="Enter your text here"
                value={note}
                onChange={setNote}
                error={errors.note}
              />
            </div>
          </div>
        </div>

        <Button
          onClick={handleButtonClick}
          disabled={!note.trim() || loading}
          loading={loading}
          className="w-full"
          label="Submit"
        />
      </div>
    </Modal>
  )
}
