import React from 'react'
import { Schema, SchemaMenuOption } from '../../utils/types'
import * as helpers from '../../utils/helpers'
import { Input } from '../Input'
import { DeleteButton } from '../Buttons'

type ItemProps = {
  onDelete: () => void
  children: React.ReactNode
}

const Item: React.FunctionComponent<ItemProps> = ({ children, onDelete }: ItemProps) => {
  return (
    <div className='flex items-end'>
      {children}
      <div className='ml-2 mb-2'>
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  )
}

type Props = {
  field: SchemaMenuOption
  schema: Schema
  onChange: (schema: Schema) => void
}

export const TextItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  return (
    <Item onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}>
      <Input
        label={field.label}
        value={helpers.getSchemaField(field.value, schema) as string}
        onChange={(t) =>
          onChange(helpers.setSchemaField(field.value, t, schema))
        }
      />
    </Item>
  )
}

export const NumberItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  return (
    <Item onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}>
      <Input
        label={field.label}
        type={'number'}
        value={helpers.getSchemaField(field.value, schema) as string}
        onChange={(t) =>
          onChange(helpers.setSchemaField(field.value, t, schema))
        }
      />
    </Item>
  )
}
