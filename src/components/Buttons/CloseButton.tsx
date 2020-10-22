import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundedButton from './RoundedButton'

type Props = {
  onClick: () => void
  title?: string
}

const CloseButton: React.FunctionComponent<Props> = ({ onClick, title }: Props) => {
  return (
    <RoundedButton
      onClick={onClick}
      title={title}
      className='text-gray-900 bg-white hover:bg-gray-200'
    >
      <FontAwesomeIcon icon={faTimes} />
    </RoundedButton>
  )
}

export default CloseButton
