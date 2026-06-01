import { IconInfoCircle } from '@tabler/icons-react'
import { Typography } from '../../atoms/Typography'

export function InvoiceRuleInfoBox() {
  return (
    <div className="jui-flex jui-w-full jui-items-center jui-gap-3 jui-rounded-notice jui-bg-secondary-200 jui-p-3">
      <IconInfoCircle
        className="jui-h-5 jui-w-5 jui-shrink-0 jui-text-primary-900"
        stroke={2}
      />

      <Typography style="body1" className="jui-text-primary-900 jui-leading-5">
        Auto-approve rule does not apply to credit-notes.
      </Typography>
    </div>
  )
}
