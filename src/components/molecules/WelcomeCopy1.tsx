import waveLarge from '../../assets/wave-large.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy1() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <img src={waveLarge} alt="Waving Emoji" className="w-24 h-24"/>

      <div className="flex flex-col space-y-2">
        <Typography style="h6" className="text-primary-900">
          Welcome to Jelly
        </Typography>

        <Typography style="caption" className="text-primary-600">
          Discover tools that effortlessly free up your time and keep you in
          control.
        </Typography>
      </div>
    </div>
  )
}