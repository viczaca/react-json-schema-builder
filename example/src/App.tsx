import React from 'react'

import { JSONSchemaBuilder } from 'react-json-schema-builder'
import 'react-json-schema-builder/dist/index.css'
import schema from './schema.json'

const App = () => {
  return <div className="flex justify-center items-center">
    <JSONSchemaBuilder schema={schema} />
  </div>
}

export default App
