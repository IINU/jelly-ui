import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Anchor } from '../atoms/Anchor'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'
import { ProfilePicture } from '../atoms/ProfilePicture'

// Preset profile pictures
import ratatouille from '../../assets/ratatouille.jpeg'
import swedishChef from '../../assets/swedish-chef.jpeg'
import spongebob from '../../assets/spongebob.png'
import margeSimpson from '../../assets/marge-simpson.png'
import lunchLadyDoris from '../../assets/lunch-lady-doris.png'
import southparkChef from '../../assets/southpark-chef.png'
import gordanRamsey from '../../assets/gordan-ramsay.png'
import monicaFriends from '../../assets/monica-friends.jpeg'

type Field = 'image'
type Errors = Partial<Record<Field, string>>

type PresetImage = {
  url: string
}

type UploadedImage = {
  file: File
}

const presetImages: string[] = [
  ratatouille,
  swedishChef,
  spongebob,
  margeSimpson,
  lunchLadyDoris,
  southparkChef,
  gordanRamsey,
  monicaFriends,
]

type Props = {
  submit: (data: Record<Field, PresetImage | UploadedImage>) => void
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

    const url = selected ? presetImages[selected] : null
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
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogo/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-6 w-full">
          <Typography style="h6">Choose a profile picture</Typography>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-y-4">
              {presetImages.map((src, i) => (
                <div className="flex justify-center items-center">
                  <ProfilePicture
                    src={src}
                    active={selected === i}
                    onClick={() => setSelected(i)}
                  />
                </div>
              ))}
            </div>

            {uploaded && (
              <div className="flex justify-center">
                <ProfilePicture
                  src={URL.createObjectURL(uploaded.file)}
                  active={selected === -1}
                  onClick={() => setSelected(-1)}
                />
              </div>
            )}
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
            label="READY FOR SERVICE"
            className="w-full"
          />

          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="flex justify-center space-x-1">
            <Typography style="caption" className="text-primary-600">
              Upload your own image
            </Typography>

            <Anchor style="caption" onClick={openFileSelect}>
              here.
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  )
}
