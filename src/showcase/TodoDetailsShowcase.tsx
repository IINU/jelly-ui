import { AppLayout } from '../layouts/AppLayout'
import { DetailsSection } from '../components/molecules/DetailsSection'
import { Typography } from '../components/atoms/Typography'
import { TextInput } from '../components/atoms/TextInput'
import { Button } from '../components/atoms/Button'
import { TextareaInput } from '../components/atoms/TextareaInput'
import { Pill } from '../components/atoms/Pill'
import { Notes } from '../components/molecules/Notes'
import { NoteVariant } from '../components/molecules/Note'
import { useState } from 'react'
import { AddNoteModal } from '../components/organisms/modals/AddNoteModal'
import { TodoEditModal } from '../components/organisms/modals/TodoEditModal'
import { sleep } from '../utils/utils'

type TodoNote = {
  title: string
  body: string
  variant: NoteVariant
}

type Assignee = { id: number, name: string }

export function TodoDetailsShowcase() {
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const notes: TodoNote[] = [
    {
      title: 'Jelly on Tue 24/05/2024 at 12:34pm',
      body: 'We cannot process handwritten invoices',
      variant: 'error',
    },
    {
      title: 'Jack Euston on Wed 25/05/2024 at 08:34am',
      body: 'Can someone on accounting find this invoice and reupload it?',
      variant: 'default',
    },
    {
      title: 'Jack Price-Burns on Thu 30/05/2024 at 09:20pm',
      body: 'Marked as completed',
      variant: 'system',
    },
  ]

  const assignees: Assignee[] = [
    { id: 1, name: 'Jack' },
    { id: 2, name: 'Jamie' },
    { id: 3, name: 'Hugo' },
    { id: 4, name: 'Frank' },
    { id: 5, name: 'Tiffany' },
  ]

  return (
    <>
      <AddNoteModal
        title="Add note"
        open={showModal}
        onClose={() => setShowModal(false)}
        saveNote={() => sleep(500)}
        errors={{}}
        notes={notes}
        titleExtractor={n => n.title}
        bodyExtractor={n => n.body}
        typeExtractor={n => n.variant}
      />

      <TodoEditModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={() => sleep(500)}
        assignees={assignees}
        assigneeToId={a => a.id}
        assigneeToLabel={a => a.name}
        title="Count stock"
        description="Count all kitchen stock plus new stock incoming from new orders."
        assignee={assignees[0]}
      />

      <AppLayout
        state="backscreen"
        title="Task details"
        hideNav
        bottomContent={(
          <>
            <Button
              onClick={() => setShowEditModal(true)}
              label="Edit Task"
              className="jui-w-full"
              style="secondary"
            />

            <Button
              onClick={() => 0}
              label="Completed"
              className="jui-w-full"
            />
          </>
        )}
      >
        <DetailsSection>
          <div className="jui-space-y-3">
            <div className="jui-space-y-2">
              <Typography style="caption" className="jui-text-primary-800">
                Title
              </Typography>

              <TextInput disabled value="Count stock" onChange={() => 0}/>
            </div>

            <div className="jui-space-y-2">
              <Typography style="caption" className="jui-text-primary-800">
                Description
              </Typography>

              <TextareaInput
                disabled
                value="Count all kitchen stock plus new stock incoming from new orders."
                onChange={() => 0}
              />
            </div>

            <div className="jui-space-y-2">
              <Typography style="caption" className="jui-text-primary-800">
                Assignee (Optional)
              </Typography>

              <Pill variant="secondary" label="Jack Price-Burns"/>
            </div>
          </div>
        </DetailsSection>

        <DetailsSection title="History">
          <div className="jui-space-y-4">
            <Notes
              notes={notes}
              titleExtractor={n => n.title}
              bodyExtractor={n => n.body}
              typeExtractor={n => n.variant}
            />

            <div className="jui-flex jui-justify-center">
              <Button
                onClick={() => setShowModal(true)}
                label="Add Note"
                style="secondary"
              />
            </div>
          </div>
        </DetailsSection>
      </AppLayout>
    </>
  )
}
