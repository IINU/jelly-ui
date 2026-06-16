import { CookingPanel } from '../components/molecules/CookingPanel'

export function CookingPanelShowcase() {
  return (
    <div className="jui-space-y-8 jui-py-6 jui-px-4">
      <CookingPanel title="Cooking up something" />

      <CookingPanel
        title="Cooking up something"
        subtitle="Use this space to create and manage tasks for you and other team members."
      />
    </div>
  )
}
