import { MouseEventHandler } from 'react'
import { IconPlus } from '@tabler/icons-react'
import { Typography } from './Typography'

type Props = {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function UploadProfilePictureButton({ className, onClick }: Props) {
  const ppBase = `jui-flex jui-justify-center jui-items-center jui-w-36 jui-h-36 jui-shadow jui-rounded-full jui-p-1 jui-bg-white`

  return (
    <button
      className={`${ppBase} ${className}`}
      onClick={onClick}
    >
      <div className="jui-w-full jui-h-full jui-rounded-full jui-bg-primary-50 jui-shadow-inner jui-flex jui-flex-col jui-items-center jui-justify-center">
        <IconPlus className="jui-text-secondary-400" size={32} stroke={1.5}/>

        <Typography className="jui-text-primary-600" style="caption">
          Upload your own image
        </Typography>
      </div>
    </button>
  )
}
