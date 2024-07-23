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
    <div className="jui-shadow jui-w-full jui-rounded-md jui-h-[34rem] jui-flex jui-flex-col">
      <div className="jui-rounded-t-md jui-bg-white jui-p-4 jui-flex jui-justify-center">
        <JellyLogoPrimary/>
      </div>

      <div className="jui-flex jui-flex-col jui-items-center jui-justify-between jui-rounded-b-md jui-bg-primary-50 jui-px-4 jui-py-8 jui-text-center jui-flex-1">
        {stages[stage].copy}

        <div className="jui-flex jui-flex-col jui-items-center jui-space-y-8 jui-w-full">
          <div className="jui-flex jui-space-x-2">
            {stages.map((_, i) =>
              <Dot key={i} active={stage === i} onClick={() => setStage(i)}/>)}
          </div>

          <div className="jui-flex jui-flex-col jui-space-y-4 jui-w-full">
            <Button
              style="primary"
              onClick={ctaClicked}
              disabled={loading}
              label={stages[stage].button}
              className="jui-w-full"
            />

            {loginLinkClicked && (
              <div className="jui-flex jui-justify-center jui-space-x-1">
                <Typography style="caption" className="jui-text-primary-600">
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
