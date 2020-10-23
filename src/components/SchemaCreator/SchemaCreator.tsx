import React from 'react'
import _ from 'lodash/fp'

import { Schema } from '../../utils/types'
import * as helpers from '../../utils/helpers'
import { SchemaBox } from '../SchemaBox'
import { SchemaControls, SchemaArrayControls } from './SchemaControls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

type Props = {
  schema: Schema
  schemakey?: string
  isRequired?: boolean
  onChangeKey?: (key: string) => void
  onDelete?: (key: string) => void
  onChange?: (schema: Schema) => void
}

const SchemaCreator: React.FunctionComponent<Props> = ({
  schema,
  onChangeKey = _.noop,
  onChange = _.noop,
  onDelete = _.noop,
  schemakey = '__root__',
  isRequired
}: Props) => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false)

  return (
    <div>
      <div className="flex items-end">
        {isRequired && <FontAwesomeIcon icon={faAsterisk} className='mr-2 mb-3 text-xs' title={'Required'}/>}
        <SchemaControls
          schema={schema}
          schemakey={schemakey}
          isCollapsed={isCollapsed}
          onChangeKey={schemakey !== '__root__' ? onChangeKey : undefined}
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
      </div>
      <div className={`${isCollapsed ? 'hidden' : 'block'}`}>
        {helpers.isSchemaObject(schema) && helpers.hasSchemaProperties(schema) && (
          <SchemaBox>
            <SchemaObjectProperties
              onChangeKey={(oldkey, newkey) =>
                onChange(helpers.renameSchemaProperty(oldkey, newkey, schema))
              }
              onDelete={(key) =>
                onChange(helpers.deleteSchemaProperty(key)(schema))
              }
              onChange={(key, s) =>
                onChange(helpers.setSchemaProperty(key)(s, schema))
              }
              schema={schema}
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
            onChangeKey={(oldkey, newkey) =>
              onChange(helpers.renameSchemaProperty(oldkey, newkey, schema))
            }
            onDelete={(key) =>
              onChange(helpers.deleteSchemaProperty(key)(schema))
            }
            onChange={(key, s) =>
              onChange(helpers.setSchemaProperty(key)(s, schema))
            }
            schema={schema}
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
  schema: Schema
  onDelete: (key: string) => void
  onChangeKey: (oldKey: string, newKey: string) => void
  onChange: (key: string, schema: Schema) => void
}

const SchemaObjectProperties: React.FunctionComponent<ObjectProps> = ({
  schema,
  onChangeKey,
  onDelete,
  onChange
}: ObjectProps) => {

  return (
    <ul className='grid gap-2 '>
      {_.entries(helpers.getSchemaProperties(schema)).map(([key, s]) => (
        <li key={key}>
          <SchemaCreator
            schema={s as Schema}
            schemakey={key}
            isRequired={helpers.isFieldRequired(key)(schema)}
            onDelete={onDelete}
            onChangeKey={(newKey) => onChangeKey(key, newKey)}
            onChange={(newSchema) => onChange(key, newSchema)}
          />
        </li>
      ))}
    </ul>
  )
}
