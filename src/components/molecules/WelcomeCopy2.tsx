import invoices from '../../assets/invoices.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy2() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img src={invoices} alt="Invoice" className="w-36 h-36 mix-blend-darken"/>

      <div className="flex flex-col space-y-2">
        <Typography style="h6" className="text-primary-900">
          Automated invoices
        </Typography>

        <Typography style="caption" className="text-primary-600">
          It all starts with invoices - link them directly to us or snap a
          photo. We extract every detail to deliver essential, real-time
          insights…
        </Typography>
      </div>
    </div>
  )
}
