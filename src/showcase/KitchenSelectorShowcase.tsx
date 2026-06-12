import { useState } from 'react'

import { Button } from '../components/atoms/Button'
import { Typography } from '../components/atoms/Typography'
import {
  KitchenSelector,
  KitchenSelectorProps,
} from '../components/molecules/KitchenSelector'

export function KitchenSelectorShowcase(props: KitchenSelectorProps) {
  const [showSelectorList, setShowSelectorList] = useState(false)

  return (
    <div className="jui-bg-primary-200 jui-p-8 jui-w-full jui-h-full">
      <div className="jui-w-80 jui-bg-white">
        {showSelectorList ? (
          <div className="jui-flex jui-flex-col jui-items-center jui-space-y-4 jui-p-4">
            <Typography style="subtitle1" className="jui-text-primary-900">
              Navigated to Selector list
            </Typography>

            <Button
              label="Back to Kitchen Selector"
              onClick={() => setShowSelectorList(false)}
            />
          </div>
        ) : (
          <KitchenSelector
            {...props}
            onClick={() => {
              props.onClick()
              setShowSelectorList(true)
            }}
          />
        )}
      </div>
    </div>
  )
}
