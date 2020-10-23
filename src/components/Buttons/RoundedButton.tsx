import React from 'react'
import _ from 'lodash/fp'


type Props = {
  onClick?: () => void
  className?: string,
  title?: string
  children: React.ReactNode
}

const RoundedButton: React.FunctionComponent<Props> = ({ onClick=_.noop, className='', children, title }: Props) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`flex items-center border focus:outline-none focus:shadow-outline-blue 
      focus:border-blue-500 text-sm justify-center shadow w-8 h-8 rounded-full ${className}`}
    >
      {children}
    </button>
  )
}

export default RoundedButton
