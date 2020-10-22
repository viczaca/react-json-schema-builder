import React from 'react'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundedButton from './RoundedButton'


type Props = {
  onClick: () => void
  isCollapsed?: boolean
  title?: string
}

const CollapseButton: React.FunctionComponent<Props> = ({isCollapsed=false, onClick, title}: Props) => {
  return (
    <RoundedButton
      onClick={onClick}
      title={title}
      className='text-white bg-gray-600 hover:bg-gray-800'
    >
      <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronDown} />
    </RoundedButton>
  )
}

export default CollapseButton