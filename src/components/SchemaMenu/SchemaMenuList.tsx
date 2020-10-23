import React from 'react'
import {
  Schema,
  SchemaFieldOptionType,
  SchemaMenuOption
} from '../../utils/types'
import {
  BoolItem,
  CreatableMultiSelectItem,
  NumberItem,
  RequiredMultiSelectItem,
  SelectItem,
  TextItem
} from './SchemaMenuItem'

const typeToItem: Record<
  SchemaFieldOptionType,
  React.FunctionComponent<any>
> = {
  text: (props) => <TextItem {...props} />,
  number: (props) => <NumberItem {...props} />,
  boolean: (props) => <BoolItem {...props} />,
  multi_creatable: (props) => <CreatableMultiSelectItem {...props} />,
  select: (props) => <SelectItem {...props} />,
  required: (props) => <RequiredMultiSelectItem {...props} />
}

type Props = {
  fields: SchemaMenuOption[]
  schema: Schema
  onChange: (schema: Schema) => void
}

const SchemaMenuList: React.FunctionComponent<Props> = ({
  fields,
  schema,
  onChange
}: Props) => {
  return (
    <ul className='mb-4 grid gap-2'>
      {fields.map((field) => (
        <li key={field.value} className=''>
          {typeToItem[field.type]({ schema, onChange, field })}
        </li>
      ))}
    </ul>
  )
}

export default SchemaMenuList
