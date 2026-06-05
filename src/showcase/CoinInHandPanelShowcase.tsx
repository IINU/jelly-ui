import { CoinInHandPanel } from '../components/molecules/CoinInHandPanel'

export function CoinInHandPanelShowcase() {
  return (
    <div className="jui-space-y-8 jui-py-6 jui-px-4">
      <CoinInHandPanel title="All clear!" />

      <CoinInHandPanel
        title="All clear!"
        subtitle="No outstanding issues with your suppliers."
      />
    </div>
  )
}
