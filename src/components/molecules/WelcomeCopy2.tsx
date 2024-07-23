import invoices from '../../assets/invoices.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy2() {
  return (
    <div className="jui-flex jui-flex-col jui-items-center jui-space-y-3">
      <img src={invoices} alt="Invoice" className="jui-w-36 jui-h-36 jui-mix-blend-darken"/>

      <div className="jui-flex jui-flex-col jui-space-y-2">
        <Typography style="h6" className="jui-text-primary-900">
          Automated invoices
        </Typography>

        <Typography style="caption" className="jui-text-primary-600">
          It all starts with invoices - link them directly to us or snap a
          photo. We extract every detail to deliver essential, real-time
          insights…
        </Typography>
      </div>
    </div>
  )
}
