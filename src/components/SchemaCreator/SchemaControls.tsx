import React from 'react'
import _ from 'lodash/fp'

import { Input } from '../Input'
import { SchemaTypesSelect } from '../Select'
import * as helpers from '../../utils/helpers'
import { Schema } from '../../utils/types'
import { AddButton, CollapseButton, DeleteButton, MenuButton } from '../Buttons'
import { SchemaMenu } from '../SchemaMenu'
import { Modal } from '../Modal'

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
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)

  return (
    <div className='grid gap-2 grid-flow-col items-end'>
      <Input
        value={helpers.getSchemaTitle(schema)}
        onChange={(t) => onChange(helpers.setSchemaTitle(t, schema))}
        placeholder='Title'
        label='Title'
      />
      <SchemaTypesSelect
        type={helpers.getSchemaType(schema)}
        onChange={(t) => onChange(helpers.setSchemaType(t, schema))}
      />
      <div className='grid grid-flow-col items-center gap-1 mb-2'>
        {_.isFunction(onCollapse) && (
          <CollapseButton
            onClick={onCollapse}
            isCollapsed={isCollapsed}
            title={'Collapse schema'}
          />
        )}
        {_.isFunction(onDelete) && (
          <DeleteButton onClick={onDelete} title={'Delete schema'} />
        )}
        {_.isFunction(onAdd) && (
          <AddButton onClick={onAdd} title={'Add schema'} />
        )}
        <MenuButton
          onClick={() => setIsMenuOpen((o) => !o)}
          title={'Open extra options menu'}
        />
        {isMenuOpen && (
          <Modal onClose={() => setIsMenuOpen(false)}>
            <SchemaMenu schema={schema} onChange={onChange} />
          </Modal>
        )}
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
    <div className='flex items-end'>
      <SchemaTypesSelect
        type={helpers.getSchemaType(schema)}
        onChange={(t) => onChange(helpers.setSchemaType(t, schema))}
      />
      <div className='ml-2 grid grid-flow-col items-center gap-1 mb-2'>
        {_.isFunction(onAdd) && (
          <AddButton onClick={onAdd} title={'Add schema'} />
        )}
      </div>
    </div>
  )
}
