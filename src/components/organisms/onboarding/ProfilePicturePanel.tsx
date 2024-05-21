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
    <div className="shadow w-full lg:w-max rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-6 w-full">
          <Typography style="h6">Choose a profile picture</Typography>

          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="space-y-4">
            <div className="flex justify-center">
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2`}>


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
            <div className="text-left px-2">
              <Typography style="caption" className="text-error-400">
                {errors.image}
              </Typography>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || selected === null}
            label="Ready For Service"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
