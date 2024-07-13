import { Modal } from '../../atoms/Modal'
import { Typography } from '../../atoms/Typography'
import { Button } from '../../atoms/Button'
import { useEffect, useState } from 'react'
import { NumberInput } from '../../atoms/NumberInput'
import { ToggleButton } from '../../atoms/ToggleButton'

export type InvoiceRuleData = {
  approveAllInvoices: boolean
  approvalThreshold: number | null
}

type Errors = Partial<Record<keyof InvoiceRuleData, string>>

type Props = {
  open: boolean
  onClose: () => void
  onSave: (data: InvoiceRuleData) => Promise<void>
  errors?: Errors
} & InvoiceRuleData

export function InvoiceRuleModal({
  open,
  onClose,
  onSave,
  errors: errorsProp,
  approveAllInvoices: approveAllInvoicesProp,
  approvalThreshold: approvalThresholdProp,
}: Props) {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Errors | null>(errorsProp || null)
  const [approveAllInvoices, setApproveAllInvoices] = useState(approveAllInvoicesProp)
  const [approvalThreshold, setApprovalThreshold] = useState(approvalThresholdProp)
  const [threshold, setThreshold] = useState(
    approvalThresholdProp === null ? '' : approvalThresholdProp.toString()
  )

  useEffect(() => setErrors(errorsProp || null), [errorsProp])

  useEffect(() => setApproveAllInvoices(approveAllInvoicesProp), [approveAllInvoicesProp])

  useEffect(() => {
    setApprovalThreshold(approvalThresholdProp)
    setThreshold(approvalThresholdProp === null ? '' : approvalThresholdProp.toString())
  }, [approvalThresholdProp])

  async function ctaClicked() {
    if (loading) return
    setLoading(true)
    try {
      await onSave({ approvalThreshold, approveAllInvoices })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (threshold.trim() === '') {
      return setApprovalThreshold(null)
    }

    const parsed = parseFloat(threshold)

    if (!Number.isNaN(parsed)) {
      setApprovalThreshold(parsed)
    }
  }, [threshold])

  return (
    <Modal
      open={open}
      onClose={() => {
        setApprovalThreshold(approvalThresholdProp)
        setApproveAllInvoices(approveAllInvoices)
        setThreshold(approvalThresholdProp === null ? '' : approvalThresholdProp.toString())
        onClose()
      }}
    >
      <div className="space-y-8">
        <div className="space-y-6">
          <Typography style="h6">Set auto-approve rule</Typography>

          <div className="space-y-4">
            <div className="space-y-2">
              <Typography style="caption" className="text-primary-800">
                Auto-approve{' '}
                <span className="font-semibold text-primary-900">IF</span>
                {' '}invoice total is{' '}
                <span className="font-semibold text-primary-900">LESS THAN</span>
              </Typography>

              <NumberInput
                value={threshold}
                error={errors?.approvalThreshold}
                disabled={approveAllInvoices}
                onChange={setThreshold}
              />
            </div>

            <div className="flex justify-between items-center w-full py-3">
              <Typography style="body2" className="text-primary-800">
                Auto-approve all
              </Typography>

              <ToggleButton
                value={approveAllInvoices}
                size="small"
                onChange={setApproveAllInvoices}
              />
            </div>
          </div>
        </div>

        <Button
          onClick={ctaClicked}
          loading={loading}
          disabled={loading}
          className="w-full mt-4"
          label="Save Rule"
        />
      </div>
    </Modal>
  )
}
