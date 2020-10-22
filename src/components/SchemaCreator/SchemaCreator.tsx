import React from 'react'
import _ from 'lodash/fp'

import { Schema } from '../../utils/types'
import * as helpers from '../../utils/helpers'
import { SchemaBox } from '../SchemaBox'
import { SchemaControls, SchemaArrayControls } from './SchemaControls'

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
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false)

  return (
    <div>
      <SchemaControls
        schema={schema}
        isCollapsed={isCollapsed}
        onAdd={
          helpers.isSchemaObject(schema)
            ? () => onChange(helpers.addSchemaProperty(schema))
            : undefined
        }
        onCollapse={
          helpers.isSchemaObject(schema) || helpers.isSchemaArray(schema)
            ? () => setIsCollapsed((c) => !c)
            : undefined
        }
        onDelete={
          schemakey !== '__root__' ? () => onDelete(schemakey) : undefined
        }
        onChange={onChange}
      />
      <div className={`${isCollapsed ? 'hidden': 'block'}`}>
        {helpers.isSchemaObject(schema) && helpers.hasSchemaProperties(schema) && (
          <SchemaBox>
            <SchemaObjectProperties
              onDelete={(key) =>
                onChange(helpers.deleteSchemaProperty(key)(schema))
              }
              onChange={(key, s) =>
                onChange(helpers.setSchemaProperty(key)(s, schema))
              }
              properties={_.entries(helpers.getSchemaProperties(schema))}
            />
          </SchemaBox>
        )}
        {helpers.isSchemaArray(schema) && (
          <SchemaBox>
            <SchemaArrayItems
              schema={helpers.getSchemaItems(schema)}
              onChange={(s) => onChange(helpers.setSchemaItems(s, schema))}
            />
          </SchemaBox>
        )}
      </div>
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
  return (
    <div>
      <SchemaArrayControls
        schema={schema}
        onChange={onChange}
        onAdd={
          helpers.isSchemaObject(schema)
            ? () => onChange(helpers.addSchemaProperty(schema))
            : undefined
        }
      />
      {helpers.isSchemaObject(schema) && helpers.hasSchemaProperties(schema) && (
        <div className='mt-2'>
          <SchemaObjectProperties
            onDelete={(key) =>
              onChange(helpers.deleteSchemaProperty(key)(schema))
            }
            onChange={(key, s) =>
              onChange(helpers.setSchemaProperty(key)(s, schema))
            }
            properties={_.entries(helpers.getSchemaProperties(schema))}
          />
        </div>
      )}
      {helpers.isSchemaArray(schema) && (
        <SchemaBox>
          <SchemaArrayItems
            schema={helpers.getSchemaItems(schema)}
            onChange={(s) => onChange(helpers.setSchemaItems(s, schema))}
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
