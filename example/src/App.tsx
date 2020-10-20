import React from 'react'

import { JSONSchemaBuilder } from 'react-json-schema-builder'
import 'react-json-schema-builder/dist/index.css'
import { Schema } from '../../dist/types'
import jsonSchema from './schema.json'

const App = () => {
  const [schema, setSchema] = React.useState<Schema>(jsonSchema)

  const updateSchema = (schema: Schema) => {
    console.log(schema)
    setSchema(schema)
  }

  return <div className="container mx-auto flex items-center justify-center py-8">
    <JSONSchemaBuilder schema={schema} onChange={updateSchema} />
  </div>
}

export default App
