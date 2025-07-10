import { ReactNode } from 'react'
import {Typography} from '../../../Typography'
import { DropdownOptionItem } from './DropdownOptionItem'

export const DropdownStatusContent = ({ content }: { content: string | ReactNode }) => {
  if(typeof content === 'string'){
    return (
      <DropdownOptionItem>
          <Typography style="body1" className="jui-text-primary-600">
            {content}
          </Typography>
      </DropdownOptionItem>
    )
  }

  return (
    <DropdownOptionItem>
      {content}
    </DropdownOptionItem>
  )
}
