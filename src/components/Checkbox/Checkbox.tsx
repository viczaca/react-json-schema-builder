import React from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import { Label } from '../Label'
import { handleChange } from './Checkbox.helpers'

type Props = {
  value: boolean
  onChange: (v: boolean) => void
  label?: string
}

const Checkbox: React.FunctionComponent<Props> = ({
  label,
  value,
  onChange
}: Props) => {
  return (
    <div className='flex flex-row'>
      <Label>{label}</Label>
      <Toggle
        onChange={handleChange(onChange)}
        defaultChecked={value}
        className='ml-2'
      />
    </div>
  )
}

export default Checkbox
