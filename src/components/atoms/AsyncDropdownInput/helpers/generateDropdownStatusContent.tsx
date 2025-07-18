import { ReactNode} from 'react'
import { AsyncDropdownStatus } from '../types';
import { DropdownOptionItem } from '../../internal/dropdown/DropdownOptions/DropdownOptionItem';
import { Typography } from '../../Typography';

export const generateDropdownStatusContent = (
  status: AsyncDropdownStatus,
  emptyContent?: ReactNode,
  optionsBottomContent?: ReactNode
): ReactNode => {
  switch (status) {
    case 'open':
      return null
    case 'closed':
      return <></>;
    case 'pre-fetching':
    case 'searching':
      return (
        <DropdownOptionItem>
            <Typography style="body1" className="jui-text-primary-600">
              Searching...
            </Typography>
        </DropdownOptionItem>
      )
    case 'empty':
      if (optionsBottomContent) {
        return null
      }

      return emptyContent ?? 'No matches found';
  }
}