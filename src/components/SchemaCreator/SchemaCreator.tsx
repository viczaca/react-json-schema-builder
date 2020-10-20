import React from 'react'
import Select from 'react-select'
import _ from 'lodash/fp'

import Input from '../Input/Input'
import { Schema, SchemaType } from '../../types'
import { schemaTypes } from './constants'
import * as helpers from '../../utils/helpers'
import DeleteButton from '../Buttons/DeleteButton'
import AddButton from '../Buttons/AddButton'

type Props = {
  schema: Schema
  schemakey?: string
  onDelete?: (key: string) => void
  onChange?: (schema: Schema) => void
}

const SchemaCreator: React.FunctionComponent<Props> = ({
  schema,
  onChange,
  onDelete,
  schemakey='__root__'
}: Props) => {
  const updateTitle = (title: string) => {
    if (!onChange) return

    onChange(helpers.setSchemaTitle(title, schema))
  }

  const updateType = (type: SchemaType) => {
    if (!onChange) return

    onChange(helpers.setSchemaType(type, schema))
  }

  const deleteSchema = () => {
    if(!onDelete || schemakey === '__root__') return

    onDelete(schemakey)
  }

  const addObjectProperty = () => {
    if(!onChange || !helpers.isSchemaObject(schema)) return

    onChange(helpers.addSchemaProperty(schema))
  }

  const onDeleteObjectChildren = (key: string) => {
    if(!onChange) return

    onChange(helpers.deleteSchemaProperty(key)(schema))
  }

  const onChangeObjectChildren = (key: string, subSchema: Schema) => {
    if (!onChange) return

    onChange(helpers.setSchemaProperty(key)(subSchema, schema))
  }

  return (
    <div className='grid gap-2'>
      <div className='grid gap-2 grid-flow-col items-center'>
        <Input
          value={schema.title as SchemaType}
          onChange={updateTitle}
          placeholder='Title'
        ></Input>
        <Select
          className='w-48 shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          options={schemaTypes}
          defaultValue={helpers.findOption(helpers.getSchemaType(schema))(
            schemaTypes
          )}
          onChange={(option: any) => updateType(option.value as SchemaType)}
          placeholder='Type'
        />
        <div className='grid grid-flow-col items-center gap-1'>
          {schemakey !== '__root__' && <DeleteButton onClick={deleteSchema} />}
          {helpers.isSchemaObject(schema) && (
            <AddButton onClick={addObjectProperty} />
          )}
        </div>
      </div>
      {helpers.isSchemaObject(schema) && helpers.hasSchemaProperties(schema) && (
        <div className='grid gap-2 border-l-2 border-blue-400 pl-2'>
          {_.entries(helpers.getSchemaProperties(schema)).map(([key, s]) => (
            <SchemaCreator
              schema={s as Schema}
              key={key}
              schemakey={key}
              onDelete={onDeleteObjectChildren}
              onChange={(newSchema) => onChangeObjectChildren(key, newSchema)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SchemaCreator
