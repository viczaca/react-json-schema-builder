import React from 'react'
import _ from 'lodash/fp'

import { Input } from '../Input'
import { SchemaTypesSelect } from '../Select'
import * as helpers from '../../utils/helpers'
import { Schema } from '../../utils/types'
import { AddButton, CollapseButton, DeleteButton } from '../Buttons'

type Props = {
  schema: Schema
  isCollapsed?: boolean
  onDelete?: () => void
  onAdd?: () => void
  onCollapse?: () => void
  onChange: (schema: Schema) => void
}

export const SchemaControls: React.FunctionComponent<Props> = ({
  schema,
  isCollapsed,
  onDelete,
  onChange,
  onAdd,
  onCollapse
}: Props) => {

  return (
    <div className='grid gap-2 grid-flow-col items-center'>
      <Input
        value={helpers.getSchemaTitle(schema)}
        onChange={(t) => onChange(helpers.setSchemaTitle(t, schema))}
        placeholder='Title'
        />
      <SchemaTypesSelect
        type={helpers.getSchemaType(schema)}
        onChange={(t) => onChange(helpers.setSchemaType(t, schema))}
        />
      <div className='grid grid-flow-col items-center gap-1'>
        {_.isFunction(onCollapse) && <CollapseButton onClick={onCollapse} isCollapsed={isCollapsed}/>}
        {_.isFunction(onDelete) && <DeleteButton onClick={onDelete} />}
        {_.isFunction(onAdd) && <AddButton onClick={onAdd} />}
      </div>
    </div>
  )
}

type ArrayProps = {
  schema: Schema
  onChange: (schema: Schema) => void
  onAdd?: () => void
}

export const SchemaArrayControls: React.FunctionComponent<ArrayProps> = ({
  schema,
  onChange,
  onAdd
}: ArrayProps) => {
  return (
    <div className='flex items-center'>
      <label className='mr-2'>Items</label>
      <SchemaTypesSelect
        type={helpers.getSchemaType(schema)}
        onChange={(t) => onChange(helpers.setSchemaType(t, schema))}
      />
      <div className='ml-2 grid grid-flow-col items-center gap-1'>
        {_.isFunction(onAdd) && <AddButton onClick={onAdd} />}
      </div>
    </div>
  )
}
