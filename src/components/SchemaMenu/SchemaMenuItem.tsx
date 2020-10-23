import React from 'react'
import CreatableSelect from 'react-select/creatable'
import Select from 'react-select'

import { Schema, SchemaMenuOption } from '../../utils/types'
import * as helpers from '../../utils/helpers'
import { Input } from '../Input'
import { DeleteButton } from '../Buttons'
import { Checkbox } from '../Checkbox'
import { Label } from '../Label'

type ItemProps = {
  onDelete: () => void
  children: React.ReactNode
}

const Item: React.FunctionComponent<ItemProps> = ({
  children,
  onDelete
}: ItemProps) => {
  return (
    <div className='flex items-end justify-between'>
      {children}
      <div className='ml-2'>
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
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
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
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <Input
        label={field.label}
        type={'number'}
        value={helpers.getSchemaField(field.value, schema) as string}
        onChange={(t) =>
          onChange(helpers.setSchemaField(field.value, parseInt(t, 10), schema))
        }
      />
    </Item>
  )
}

export const BoolItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <Checkbox
        label={field.label}
        value={helpers.getSchemaField(field.value, schema) as boolean}
        onChange={(t) =>
          onChange(helpers.setSchemaField(field.value, t, schema))
        }
      />
    </Item>
  )
}

export const CreatableMultiSelectItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  const selected = helpers.getSchemaField(field.value, schema)

  const allOptions = React.useMemo(
    () => helpers.stringsToOptions(selected as string[]),
    [selected]
  )

  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <div className='w-full'>
        <Label>{field.label}</Label>
        <CreatableSelect
          isMulti
          className='min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          options={allOptions}
          value={allOptions}
          onChange={(options: any) => {
            onChange(
              helpers.setSchemaField(
                field.value,
                helpers.optionsToStrings(options),
                schema
              )
            )
          }}
          placeholder='Options'
        />
      </div>
    </Item>
  )
}

export const SelectItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  const option = helpers.getSchemaField(field.value, schema)
  const selected = React.useMemo(
    () => helpers.findOption(option as string)(field.optionList),
    [field.optionList, option]
  )

  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <div className='w-full'>
        <Label>{field.label}</Label>
        <Select
          className='min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          options={field.optionList}
          value={selected}
          onChange={(option: any) => {
            onChange(helpers.setSchemaField(field.value, option.value, schema))
          }}
          placeholder='Options'
        />
      </div>
    </Item>
  )
}

export const RequiredMultiSelectItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  if (!helpers.isSchemaObject(schema) || !helpers.hasSchemaProperties(schema))
    return null

  const allOptions = helpers.schemaPropertiesAsOptions(schema)
  const requiredOptions = helpers.schemaRequiredPropertiesAsOptions(schema)

  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <div className='w-full'>
        <Label>{field.label}</Label>
        <Select
          isMulti
          className='min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          options={allOptions}
          value={requiredOptions}
          onChange={(options: any) => {
            onChange(
              helpers.setSchemaField(
                field.value,
                helpers.optionsToStrings(options),
                schema
              )
            )
          }}
          placeholder='Options'
        />
      </div>
    </Item>
  )
}
