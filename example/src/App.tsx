import React from 'react'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/1337.css'


import JSONSchemaBuilder, {Schema } from 'react-json-schema-builder'
import 'react-json-schema-builder/dist/index.css'
import jsonSchema from './schema.json'

const App = () => {
  const [schema, setSchema] = React.useState<Schema>(jsonSchema)

  return <div className="mx-auto grid gap-4 grid-flow-col p-8">
    <JSONSchemaBuilder locale={"es"} schema={schema} onChange={setSchema} />
    <JSONPretty data={schema}/>
  </div>
}

export default App
