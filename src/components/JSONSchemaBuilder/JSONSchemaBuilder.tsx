import React from 'react'
import _ from 'lodash/fp'

import {SchemaCreator} from '../SchemaCreator'
import { Schema } from '../../utils/types'
import { defaultSchema } from '../../utils/constants'

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
      <SchemaCreator schema={!_.isEmpty(schema) ? schema : defaultSchema} onChange={onChange}/>
    </div>
  )
}

export default JSONSchemaBuilder
