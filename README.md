# react-json-schema-builder

> Allows to build a json schema interactively.

[![NPM](https://img.shields.io/npm/v/react-json-schema-builder.svg)](https://www.npmjs.com/package/react-json-schema-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-json-schema-builder
```
or 
```bash
yarn add react-json-schema-builder
```

## Usage

```tsx
import React from 'react'

import JSONSchemaBuilder, {Schema} from 'react-json-schema-builder'
import 'react-json-schema-builder/dist/index.css'


const Example = () => {
  const [schema, setSchema] = React.useState<Schema>(jsonSchema)

  return (
    <JSONSchemaBuilder 
      schema={schema} 
      onChange={setSchema} 
    />)
}
```

## License

MIT © [viczaca](https://github.com/viczaca)
