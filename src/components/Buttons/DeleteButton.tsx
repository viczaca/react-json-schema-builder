import React from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundedButton from './RoundedButton'


type Props = {
  onClick: () => void
  title?: string
}

const DeleteButton: React.FunctionComponent<Props> = ({ onClick, title }: Props) => {
  return (
    <RoundedButton
      onClick={onClick}
      title={title}
      className='text-white bg-red-500 hover:bg-red-700'
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </RoundedButton>
  )
}

export default DeleteButton
