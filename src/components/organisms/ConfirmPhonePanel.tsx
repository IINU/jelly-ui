import { Button } from '../atoms/Button'
import { JellyLogo } from '../atoms/JellyLogo'
import { Typography } from '../atoms/Typography'
import { MouseEventHandler, useEffect, useMemo, useState } from 'react'
import { Anchor } from '../atoms/Anchor'
import { TextInput } from '../atoms/TextInput'
import { useEnterSubmit } from '../../hooks/useEnterSubmit'

export type ConfirmPhoneData = {
  code: string
}

type Errors = Partial<Record<keyof ConfirmPhoneData, string>>

type Props = {
  confirmCode: (data: ConfirmPhoneData) => void
  resendCodeClicked: MouseEventHandler
  loginLinkClicked?: MouseEventHandler
  loading?: boolean
  errors?: Errors
}

export function ConfirmPhonePanel({
  confirmCode,
  resendCodeClicked,
  loginLinkClicked,
  loading,
  errors: propErrors,
}: Props) {
  const [errors, setErrors] = useState<Errors | null>(propErrors || null)
  const [code, setCode] = useState(['', '', '', '', '', ''])

  useEnterSubmit({ ctaClicked })
  useEffect(() => setErrors(propErrors || null), [propErrors])

  useEffect(() => {
    const handlePaste = async (event: ClipboardEvent) => {
      const pasteData = event.clipboardData?.getData('text/plain')
      if (!pasteData) return

      const codeDigits = pasteData.slice(0, 6).split('')
      setCode(codeDigits)
    }

    window.addEventListener('paste', handlePaste)
    return () => {
      window.removeEventListener('paste', handlePaste)
    }
  }, [])

  const enteredCode = useMemo(() => code.join(''), [code])

  function selectInput(element: HTMLInputElement | null) {
    if (!element) {
      return
    }

    element.focus()
    element.select()
  }

  function selectPreviousDigit(current: number) {
    if (current === 0) return
    selectInput(document.querySelector<HTMLInputElement>(`input[name="digit-${current - 1}"]`))
  }

  function selectNextDigit(current: number) {
    if (current === 5) return
    selectInput(document.querySelector<HTMLInputElement>(`input[name="digit-${current + 1}"]`))
  }

  function handleCodeChange(index: number, value: string) {
    if (value.length > 1) return
    if (value === ' ') return
    if (Number.isNaN(Number(value))) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    if (value === '') return selectPreviousDigit(index)
    selectNextDigit(index)
  }

  function ctaClicked() {
    setErrors(null)

    const calcErrors: Errors = {}
    if (enteredCode.length !== 6) calcErrors.code = 'This is required.'

    if (Object.values(calcErrors).filter(Boolean).length) {
      setErrors(calcErrors)
      return
    }

    confirmCode({ code: enteredCode })
  }

  return (
    <div className="shadow w-full rounded-md">
      <div className="rounded-t-md bg-white p-4 flex flex-col items-center justify-center">
        <JellyLogo/>
      </div>

      <div className="flex flex-col items-center space-y-8 rounded-b-md bg-primary-50 px-4 py-8 text-center">
        <div className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col space-y-2">
            <Typography style="h6">Confirm Phone Number</Typography>

            <Typography style="caption" className="text-primary-600">
              Enter the 6-digit code sent to your phone number.
            </Typography>
          </div>

          <div className="space-y-1">
            <div className="flex justify-center space-x-2">
              {code.map((digit, index) => (
                <div key={index} className="w-10">
                  <TextInput
                    name={`digit-${index}`}
                    value={digit}
                    onChange={(value) => handleCodeChange(index, value)}
                    className="text-center px-0"
                  />
                </div>
              ))}
            </div>

            {errors?.code && (
              <div className="text-left px-2">
                <Typography style="caption" className="text-error-400">
                  {errors.code}
                </Typography>
              </div>
            )}
          </div>

          <div className="flex justify-center space-x-1">
            <Typography style="caption" className="text-primary-600">
              It might take a minute to arrive.
            </Typography>

            <Anchor style="caption" onClick={resendCodeClicked}>
              Resend.
            </Anchor>
          </div>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Button
            style="primary"
            onClick={ctaClicked}
            disabled={loading || enteredCode.length !== 6}
            label="CONFIRM"
            className="w-full"
          />

          {loginLinkClicked && (
            <div className="flex justify-center space-x-1">
              <Typography style="caption" className="text-primary-600">
                Already registered?
              </Typography>

              <Anchor style="caption" onClick={loginLinkClicked}>
                Log in here.
              </Anchor>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
