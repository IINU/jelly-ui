import { TrophyPanel } from '../components/molecules/TrophyPanel'

export function TrophyPanelShowcase() {
  return (
    <div className="jui-space-y-8 jui-py-6 jui-px-4">
      <TrophyPanel title="Finance all clear" />

      <TrophyPanel
        title="Kitchen clear!"
        subtitle="Use this space to create and manage tasks for you and other team members."
      />
    </div>
  )
}
