import React from 'react'
import _ from 'lodash/fp'

import { Input } from '../Input'
import { SchemaTypesSelect } from '../Select'
import * as helpers from '../../utils/helpers'
import { Schema } from '../../utils/types'
import { AddButton, CollapseButton, DeleteButton, MenuButton } from '../Buttons'
import { SchemaMenu } from '../SchemaMenu'
import { Modal } from '../Modal'
import { useTranslation } from 'react-i18next';


type Props = {
  schema: Schema
  schemakey: string
  isCollapsed?: boolean
  onDelete?: () => void
  onAdd?: () => void
  onCollapse?: () => void
  onChangeKey?: (key: string) => void
  onChange: (schema: Schema) => void
}

export const SchemaControls: React.FunctionComponent<Props> = ({
  schema,
  schemakey,
  isCollapsed,
  onDelete,
  onChange,
  onChangeKey,
  onAdd,
  onCollapse
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
  const {t} = useTranslation()
  return (
    <div className='flex flex-row items-end'>
      <div className='grid grid-flow-col gap-2 mr-2'>
        <Input
          value={helpers.getSchemaTitle(schema)}
          onChange={(t) => onChange(helpers.setSchemaTitle(t, schema))}
          placeholder={t('title')}
          label={t('title')}
        />
        <SchemaTypesSelect
          type={helpers.getSchemaType(schema)}
          onChange={(t) => onChange(helpers.setSchemaTypeAndRemoveWrongFields(t, schema))}
        />
        {_.isFunction(onChangeKey) ? (
          <Input
            value={schemakey}
            onChange={onChangeKey}
            placeholder={t('key')}
            label={t('key')}
          />
        ) : null}
      </div>
      <div className='grid grid-flow-col items-center gap-1'>
        {_.isFunction(onCollapse) ? (
          <CollapseButton
            onClick={onCollapse}
            isCollapsed={isCollapsed}
            title={t('collapse')}
          />
        ) : null}
        <MenuButton
          onClick={() => setIsMenuOpen((o) => !o)}
          title={t('extraOptions')}
        />
        {_.isFunction(onDelete) ? (
          <DeleteButton onClick={onDelete} title={t('delete')} />
        ) : null}
        {_.isFunction(onAdd) ? (
          <AddButton onClick={onAdd} title={t('add')} />
        ) : null}
      </div>
      {isMenuOpen ? (
        <Modal onClose={() => setIsMenuOpen(false)} title={t('extraFields')}>
          <SchemaMenu schema={schema} onChange={onChange} />
        </Modal>
      ) : null}
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
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
  const {t} = useTranslation()
  return (
    <div className='flex items-end'>
      <SchemaTypesSelect
        type={helpers.getSchemaType(schema)}
        onChange={(t) => onChange(helpers.setSchemaTypeAndRemoveWrongFields(t, schema))}
      />
      <div className='ml-2 grid grid-flow-col gap-1'>
        <MenuButton
          onClick={() => setIsMenuOpen((o) => !o)}
          title={t('extraOptions')}
        />
        {_.isFunction(onAdd) ? (
          <AddButton onClick={onAdd} title={t('add')} />
        ) : null}
      </div>
      {isMenuOpen ? (
        <Modal onClose={() => setIsMenuOpen(false)} title={t('extraFields')}>
          <SchemaMenu schema={schema} onChange={onChange} />
        </Modal>
      ) : null}
    </div>
  )
}
