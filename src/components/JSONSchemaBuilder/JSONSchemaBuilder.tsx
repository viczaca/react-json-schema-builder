import React from 'react'
import _ from 'lodash/fp'

import SchemaCreator from '../SchemaCreator/SchemaCreator'
import { Schema } from '../../types'

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
