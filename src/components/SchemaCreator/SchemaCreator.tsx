import React from 'react'
import _ from 'lodash/fp'

import { Schema, SchemaType } from '../../types'
import * as helpers from '../../utils/helpers'
import { AddButton } from '../Buttons'
import { SchemaTypesSelect } from '../Select'
import { SchemaBox } from '../SchemaBox'
import SchemaControls from './SchemaControls'

type Props = {
  schema: Schema
  schemakey?: string
  onDelete?: (key: string) => void
  onChange?: (schema: Schema) => void
}

const SchemaCreator: React.FunctionComponent<Props> = ({
  schema,
  onChange = _.noop,
  onDelete = _.noop,
  schemakey = '__root__'
}: Props) => {
  const onChangeSchemaField = (key: string, value: unknown) => {
    onChange(helpers.setSchemaField(key, value, schema))
  }

  const onDeleteSchema = () => {
    onDelete(schemakey)
  }

  const onAddObjectProperty = () => {
    onChange(helpers.addSchemaProperty(schema))
  }

  const onChangeArrayChildren = (subSchema: Schema) => {
    onChange(helpers.setSchemaItems(subSchema, schema))
  }

  const onDeleteObjectChildren = (key: string) => {
    onChange(helpers.deleteSchemaProperty(key)(schema))
  }

  const onChangeObjectChildren = (key: string, subSchema: Schema) => {
    onChange(helpers.setSchemaProperty(key)(subSchema, schema))
  }

  return (
    <div>
      <SchemaControls
        schema={schema}
        onAdd={helpers.isSchemaObject(schema) ? onAddObjectProperty : undefined}
        onDelete={schemakey !== '__root__' ? onDeleteSchema : undefined}
        onChange={onChangeSchemaField}
      />
      {helpers.isSchemaObject(schema) && helpers.hasSchemaProperties(schema) && (
        <SchemaBox>
          <SchemaObjectProperties
            onDelete={onDeleteObjectChildren}
            onChange={onChangeObjectChildren}
            properties={_.entries(helpers.getSchemaProperties(schema))}
          />
        </SchemaBox>
      )}
      {helpers.isSchemaArray(schema) && (
        <SchemaBox>
          <SchemaArrayItems
            schema={helpers.getSchemaItems(schema)}
            onChange={onChangeArrayChildren}
          />
        </SchemaBox>
      )}
    </div>
  )
}

export default SchemaCreator

type ArrayProps = {
  schema: Schema
  onChange: (schema: Schema) => void
}

const SchemaArrayItems: React.FunctionComponent<ArrayProps> = ({
  schema,
  onChange
}: ArrayProps) => {
  const onChangeType = (type: SchemaType) => {
    onChange(helpers.setSchemaType(type, schema))
  }

  const onChangeArrayChildren = (subSchema: Schema) => {
    if (!helpers.isSchemaArray(schema)) return

    onChange(helpers.setSchemaItems(subSchema, schema))
  }

  const onAddObjectProperty = () => {
    if (!helpers.isSchemaObject(schema)) return

    onChange(helpers.addSchemaProperty(schema))
  }

  const onDeleteObjectChildren = (key: string) => {
    onChange(helpers.deleteSchemaProperty(key)(schema))
  }

  const onChangeObjectChildren = (key: string, subSchema: Schema) => {
    onChange(helpers.setSchemaProperty(key)(subSchema, schema))
  }

  return (
    <div>
      <div className='flex items-center'>
        <label className='mr-2'>Items</label>
        <SchemaTypesSelect
          type={helpers.getSchemaType(schema)}
          onChange={onChangeType}
        />
        <div className='ml-2 grid grid-flow-col items-center gap-1'>
          {helpers.isSchemaObject(schema) && (
            <AddButton onClick={onAddObjectProperty} />
          )}
        </div>
      </div>
      {helpers.isSchemaObject(schema) && helpers.hasSchemaProperties(schema) && (
        <div className='mt-2'>
          <SchemaObjectProperties
            onDelete={onDeleteObjectChildren}
            onChange={onChangeObjectChildren}
            properties={_.entries(helpers.getSchemaProperties(schema))}
          />
        </div>
      )}
      {helpers.isSchemaArray(schema) && (
        <SchemaBox>
          <SchemaArrayItems
            schema={helpers.getSchemaItems(schema)}
            onChange={onChangeArrayChildren}
          />
        </SchemaBox>
      )}
    </div>
  )
}

type ObjectProps = {
  properties: [string, Schema][]
  onDelete: (key: string) => void
  onChange: (key: string, schema: Schema) => void
}

const SchemaObjectProperties: React.FunctionComponent<ObjectProps> = ({
  properties,
  onDelete,
  onChange
}: ObjectProps) => {
  return (
    <ul className='grid gap-2 '>
      {properties.map(([key, s]) => (
        <li key={key}>
          <SchemaCreator
            schema={s}
            schemakey={key}
            onDelete={onDelete}
            onChange={(newSchema) => onChange(key, newSchema)}
          />
        </li>
      ))}
    </ul>
  )
}
