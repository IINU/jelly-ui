import wave from '../../assets/chef-wave.png'
import { Typography } from '../atoms/Typography'

export function WelcomeCopy1() {
  return (
    <div className="jui-flex jui-flex-col jui-items-center jui-space-y-3">
      <img src={wave} alt="Waving Emoji" className="jui-w-36 jui-h-36 jui-mix-blend-darken"/>

      <div className="jui-flex jui-flex-col jui-space-y-2">
        <Typography style="h6" className="jui-text-primary-900">
          Welcome to Jelly
        </Typography>

        <Typography style="caption" className="jui-text-primary-600">
          Discover tools that effortlessly<br/>
          free up your time and<br/>
          keep you in control.
        </Typography>
      </div>
    </div>
  )
}
