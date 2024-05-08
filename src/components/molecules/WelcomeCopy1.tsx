import wave from '../../assets/chef-wave.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy1() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img src={wave} alt="Waving Emoji" className="w-36 h-36 mix-blend-darken"/>

      <div className="flex flex-col space-y-2">
        <Typography style="h6" className="text-primary-900">
          Welcome to Jelly
        </Typography>

        <Typography style="caption" className="text-primary-600">
          Discover tools that effortlessly<br/>
          free up your time and<br/>
          keep you in control.
        </Typography>
      </div>
    </div>
  )
}
