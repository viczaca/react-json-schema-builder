import React from 'react'

import {SchemaCreator} from '../SchemaCreator'
import { Schema } from '../../utils/types'

type Props = {
  schema: Schema
  onChange?: (newSchema: Schema) => void
}

const JSONSchemaBuilder: React.FunctionComponent<Props> = ({
  schema,
  onChange
}: Props) => {
  return (
    <div>
      <SchemaCreator schema={schema} onChange={onChange}/>
    </div>
  )
}

export default JSONSchemaBuilder
