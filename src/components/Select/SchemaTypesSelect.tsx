import React from 'react'
import Select from 'react-select'
import { schemaTypes } from '../../utils/constants'
import * as helpers from '../../utils/helpers'
import { SchemaType } from '../../utils/types'
import { Label } from '../Label'

type Props = {
  type: SchemaType
  onChange: (type: SchemaType) => void
}

const SchemaTypesSelect: React.FunctionComponent<Props> = ({
  type,
  onChange
}: Props) => {
  return (
    <div className="w-full">
      <Label>Type</Label>
      <Select
        className='w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        options={schemaTypes}
        value={helpers.findOption(type)(schemaTypes)}
        onChange={(option: any) => onChange(option.value)}
        placeholder='Type'
      />
    </div>
  )
}

export default SchemaTypesSelect
