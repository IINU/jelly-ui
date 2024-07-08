import { AppLayout } from '../layouts/AppLayout'
import { TodoSection } from '../components/molecules/TodoSection'
import { TodoTask } from '../components/molecules/TodoTask'
import { TodoTaskProgress } from '../components/molecules/TodoTaskProgress'
import { useState } from 'react'
import { TodoCreateModal } from '../components/organisms/modals/TodoCreateModal'
import { sleep } from '../utils/utils'

type Assignee = { id: number, name: string }

export function TodoShowcase() {
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

      <div className="space-y-8 py-6 px-4">
        <TodoTaskProgress completed={6} total={20}/>

        <TodoSection title="To do">
          <TodoTask
            title="Hi there"
            completed={false}
            onClick={() => 0}
          />
        </TodoSection>

        <TodoSection title="Completed on 18th of May">
          <TodoTask
            title="Hi there"
            completed={true}
            onClick={() => 0}
          />

          <TodoTask
            title="Hi there"
            completed={true}
            onClick={() => 0}
          />
        </TodoSection>

        <TodoSection title="Completed on 12th of May">
          <TodoTask
            title="Hi there"
            completed={true}
            onClick={() => 0}
          />

          <TodoTask
            title="Hi there"
            completed={true}
            onClick={() => 0}
          />

          <TodoTask
            title="Hi there"
            subtitle="Jack Price-Burns"
            completed={true}
            onClick={() => 0}
          />

          <TodoTask
            title="Hi there"
            subtitle="Jack Price-Burns"
            completed={true}
            onClick={() => 0}
          />
        </TodoSection>

        <TodoSection title="Completed on 9th of May">
          <TodoTask
            title="Hi there"
            subtitle="Jack Price-Burns"
            completed={true}
            onClick={() => 0}
          />

          <TodoTask
            title="Hi there"
            subtitle="Jack Price-Burns"
            completed={true}
            onClick={() => 0}
          />

          <TodoTask
            title="Hi there"
            subtitle="Jack Price-Burns"
            completed={true}
            onClick={() => 0}
          />

          <TodoTask
            title="Hi there"
            subtitle="Jack Price-Burns"
            completed={true}
            onClick={() => 0}
          />
        </TodoSection>
      </div>
    </AppLayout>
  )
}
