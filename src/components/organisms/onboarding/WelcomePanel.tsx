import { Dot } from '../../atoms/Dot'
import { Button } from '../../atoms/Button'
import { JellyLogoPrimary } from '../../atoms/svgs/JellyLogoPrimary'
import { Typography } from '../../atoms/Typography'
import { MouseEventHandler, useState } from 'react'
import { WelcomeCopy1 } from '../../molecules/WelcomeCopy1'
import { WelcomeCopy2 } from '../../molecules/WelcomeCopy2'
import { WelcomeCopy3 } from '../../molecules/WelcomeCopy3'
import { WelcomeCopy4 } from '../../molecules/WelcomeCopy4'
import { Anchor } from '../../atoms/Anchor'
import { useEnterSubmit } from '../../../hooks/useEnterSubmit'

type Props = {
  next: () => void,
  loading?: boolean,
  loginLinkClicked?: MouseEventHandler,
}

export function WelcomePanel({ next, loading, loginLinkClicked }: Props) {
  useEnterSubmit({ ctaClicked })
  const [stage, setStage] = useState(0)

  const stages = [
    {
      copy: <WelcomeCopy1/>,
      button: 'Start Tour',
    },
    {
      copy: <WelcomeCopy2/>,
      button: 'Tour: Know Your Spend',
    },
    {
      copy: <WelcomeCopy3/>,
      button: 'Tour: Real-time Costing',
    },
    {
      copy: <WelcomeCopy4/>,
      button: 'Create Account',
    },
  ]

  function ctaClicked() {
    if (stage >= stages.length - 1) {
      next()
      return
    }

    setStage(stage + 1)
  }

  return (
    <div className="shadow w-full rounded-md h-[34rem] flex flex-col">
      <div className="rounded-t-md bg-white p-4 flex justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="flex flex-col items-center justify-between rounded-b-md bg-primary-50 px-4 py-8 text-center flex-1">
        {stages[stage].copy}

        <div className="flex flex-col items-center space-y-8 w-full">
          <div className="flex space-x-2">
            {stages.map((_, i) =>
              <Dot key={i} active={stage === i} onClick={() => setStage(i)}/>)}
          </div>

          <div className="flex flex-col space-y-4 w-full">
            <Button
              style="primary"
              onClick={ctaClicked}
              disabled={loading}
              label={stages[stage].button}
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
    </div>
  )
}
