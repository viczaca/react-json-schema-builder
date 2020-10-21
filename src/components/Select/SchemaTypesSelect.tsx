import React from 'react'
import Select from 'react-select'
import { SchemaType } from '../../types'
import { schemaTypes } from './constants'
import * as helpers from '../../utils/helpers'

type Props = {
  type: SchemaType,
  onChange: (type: SchemaType) => void
}

const SchemaTypesSelect: React.FunctionComponent<Props> = ({ type, onChange }: Props) => {
  return (
    <Select
      className='w-48 shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
      options={schemaTypes}
      value={helpers.findOption(type)(schemaTypes)}
      onChange={(option: any) => onChange(option.value)}
      placeholder='Type'
    />
  )
}

export default SchemaTypesSelect
