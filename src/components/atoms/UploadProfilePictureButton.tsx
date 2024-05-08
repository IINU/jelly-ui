import { MouseEventHandler } from 'react'
import { IconPlus } from '@tabler/icons-react'
import { Typography } from './Typography'

type Props = {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function UploadProfilePictureButton({ className, onClick }: Props) {
  const ppBase = `flex justify-center items-center w-36 h-36 shadow rounded-full p-1 bg-white`

  return (
    <button
      className={`${ppBase} ${className}`}
      onClick={onClick}
    >
      <div className="w-full h-full rounded-full bg-primary-50 shadow-inner flex flex-col items-center justify-center">
        <IconPlus className="text-secondary-400" size={32} stroke={1.5}/>

        <Typography className="text-primary-600" style="caption">
          Upload your own image
        </Typography>
      </div>
    </button>
  )
}
