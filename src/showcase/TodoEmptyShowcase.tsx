import { AppLayout } from '../layouts/AppLayout'
import { TodoNoTasks } from '../components/molecules/TodoNoTasks'
import { sleep } from '../utils/utils'
import { TodoCreateModal } from '../components/organisms/modals/TodoCreateModal'
import { useState } from 'react'

type Assignee = { id: number, name: string }

export function TodoEmptyShowcase() {
  const [showModal, setShowModal] = useState(false)

  const assignees: Assignee[] = [
    { id: 1, name: 'Jack' },
    { id: 2, name: 'Jamie' },
    { id: 3, name: 'Hugo' },
    { id: 4, name: 'Frank' },
    { id: 5, name: 'Tiffany' },
  ]

  return (
    <AppLayout
      state="homescreen"
      title="To-do"
      actionButton="Create Task"
      actionClick={() => setShowModal(true)}
    >
      <TodoCreateModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={() => sleep(500)}
        assignees={assignees}
        assigneeToId={a => a.id}
        assigneeToLabel={a => a.name}
      />

      <TodoNoTasks/>
    </AppLayout>
  )
}
