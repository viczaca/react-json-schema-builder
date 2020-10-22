import React from 'react'
import { CloseButton } from '../Buttons'

type Props = {
  onClose: () => void
  children?: React.ReactNode
  title?: string | React.ReactNode
}

const Modal: React.FunctionComponent<Props> = ({
  onClose,
  children,
  title
}) => {
  return (
    <div>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          <div className='p-2 rounded shadow relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-start justify-between'>
              <h3 className='text-3xl font-semibold'>{title}</h3>
              <CloseButton onClick={onClose} />
            </div>
            <div className='mt-2'>{children}</div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </div>
  )
}

export default Modal
