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
      className={`flex items-center focus:outline-none text-xs justify-center shadow w-6 h-6 rounded-full ${className}`}
    >
      {children}
    </button>
  )
}

export default RoundedButton
