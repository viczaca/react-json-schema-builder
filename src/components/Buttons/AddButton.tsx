import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundedButton from './RoundedButton'

type Props = {
  onClick: () => void
}

const AddButton: React.FunctionComponent<Props> = ({ onClick }: Props) => {
  return (
    <RoundedButton
      onClick={onClick}
      className='text-white bg-blue-500 hover:bg-blue-700'
    >
      <FontAwesomeIcon icon={faPlus} />
    </RoundedButton>
  )
}

export default AddButton
