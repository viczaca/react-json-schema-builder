import React from 'react'
import { Input } from '../Input'
import { SchemaTypesSelect } from '../Select'
import * as helpers from '../../utils/helpers'
import { Schema} from '../../types'
import { AddButton, DeleteButton } from '../Buttons'

type Props = {
  schema: Schema
  onDelete?: () => void
  onAdd?: () => void
  onChange: (key: string, value: unknown) => void
}

const SchemaControls: React.FunctionComponent<Props> = ({
  schema,
  onDelete,
  onAdd,
  onChange
}: Props) => {
  return (
    <div className='grid gap-2 grid-flow-col items-center'>
      <Input
        value={helpers.getSchemaTitle(schema)}
        onChange={(t) => onChange('title', t)}
        placeholder='Title'
      />
      <SchemaTypesSelect
        type={helpers.getSchemaType(schema)}
        onChange={(t) => onChange('type', t)}
      />
      <div className='grid grid-flow-col items-center gap-1'>
        {onDelete && <DeleteButton onClick={onDelete} />}
        {onAdd && <AddButton onClick={onAdd} />}
      </div>
    </div>
  )
}

export default SchemaControls
