import invoiceLarge from '../../assets/invoice-large.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy2() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <img src={invoiceLarge} alt="Invoice" className="w-24 h-24"/>

      <div className="flex flex-col space-y-2">
        <Typography style="h6" className="text-primary-900">
          Automated invoices
        </Typography>

        <Typography style="caption" className="text-primary-600">
          It all starts with invoices - link them directly to us or snap a
          photo. We extract every detail to delivery essential, real-time
          insights. Such as supplier price changes…
        </Typography>
      </div>
    </div>
  )
}