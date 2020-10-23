import React from 'react'
import _ from 'lodash/fp'

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundedButton from './RoundedButton'

type Props = {
  onClick?: () => void
  title?: string
}

const MenuButton: React.FunctionComponent<Props> = ({ onClick=_.noop, title }: Props) => {
  return (
    <RoundedButton
      onClick={onClick}
      title={title}
      className='text-gray-800 bg-white hover:bg-gray-200'
    >
      <FontAwesomeIcon icon={faEllipsisV} />
    </RoundedButton>
  )
}

export default MenuButton
