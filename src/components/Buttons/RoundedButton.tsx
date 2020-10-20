import React from 'react'

type Props = {
  onClick: () => void
  className?: string,
  children: React.ReactNode
}

const RoundedButton: React.FunctionComponent<Props> = ({ onClick, className='', children }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center border focus:outline-none focus:shadow-outline-blue 
      focus:border-blue-500 text-xs justify-center shadow w-6 h-6 rounded-full ${className}`}
    >
      {children}
    </button>
  )
}

export default RoundedButton
