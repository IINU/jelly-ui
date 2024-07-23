import { Button } from '../../atoms/Button'
import { JellyLogoPrimary } from '../../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../../atoms/Typography'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useEnterSubmit } from '../../../hooks/useEnterSubmit'
import { ProfilePicture } from '../../atoms/ProfilePicture'
import { UploadProfilePictureButton } from '../../atoms/UploadProfilePictureButton'

export type ProfilePictureData = {
  image: PresetImage | UploadedImage
}

type Errors = Partial<Record<keyof ProfilePictureData, string>>

type PresetImage = {
  url: string
}

type UploadedImage = {
  file: File
}

const presetImages: string[] = [
  'https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/remy.png',
  'https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/swedish-chef.png',
  'https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/spongebob.png',
  'https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/marge.png',
  'https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/doris.png',
  'https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/gordan.png',
  'https://iinu-pictures-production.s3.eu-west-2.amazonaws.com/profile-pictures/monica.png',
]

type Props = {
  submit: (data: ProfilePictureData) => void
  loading?: boolean
  errors?: Errors
}

export function ProfilePicturePanel({
  submit,
  loading,
  errors: propErrors,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(propErrors || null)
  const [uploaded, setUploaded] = useState<UploadedImage | null>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(propErrors || null), [propErrors])

  function ctaClicked() {
    setErrors(null)

    const url = selected !== null ? presetImages[selected] : null
    if (url) {
      return submit({ image: { url } })
    }

    if (selected === -1 && uploaded) {
      return submit({ image: uploaded })
    }

    return setErrors({ image: 'This is required.' })
  }

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const [file] = event.target.files ?? []
    if (!file) {
      return
    }

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      return setErrors({ image: 'Only JPEG or PNG images are allowed.' })
    }

    setUploaded({ file })
    setSelected(-1) // Set to a unique index for the uploaded image
  }

  const openFileSelect = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="jui-shadow jui-w-full jui-rounded-md">
      <div className="jui-rounded-t-md jui-bg-white jui-p-4 jui-flex jui-flex-col jui-items-center jui-justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="jui-flex jui-flex-col jui-items-center jui-space-y-8 jui-rounded-b-md jui-bg-primary-50 jui-px-4 jui-py-8 jui-text-center">
        <div className="jui-flex jui-flex-col jui-space-y-6 jui-w-full">
          <Typography style="h6" className="jui-text-primary-900">
            Choose a profile picture
          </Typography>

          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            className="jui-hidden"
          />

          <div className="jui-space-y-4">
            <div className="jui-flex jui-justify-center">
              <div className="jui-grid jui-grid-cols-2 jui-gap-y-4 jui-gap-x-2">

                {uploaded ? (
                  <ProfilePicture
                    src={URL.createObjectURL(uploaded.file)}
                    active={selected === -1}
                    onClick={() => {
                      selected === -1 ? openFileSelect() : setSelected(-1)
                    }}
                  />
                ) : (
                  <UploadProfilePictureButton onClick={openFileSelect}/>
                )}

                {presetImages.map((src, i) => (
                  <ProfilePicture
                    src={src}
                    active={selected === i}
                    onClick={() => setSelected(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {errors?.image && (
            <div className="jui-text-left jui-px-2">
              <Typography style="caption" className="jui-text-error-400">
                {errors.image}
              </Typography>
            </div>
          )}
        </div>

        <div className="jui-flex jui-flex-col jui-space-y-2 jui-w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || selected === null}
            label="Ready For Service"
            className="jui-w-full"
          />
        </div>
      </div>
    </div>
  )
}
