# react-json-schema-builder

> Allows to build a json schema interactively.

[![NPM](https://img.shields.io/npm/v/react-json-schema-builder.svg)](https://www.npmjs.com/package/react-json-schema-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**[Demo](https://viczaca.github.io/react-json-schema-builder/)**

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
      locale={"es"} 
      schema={schema} 
      onChange={setSchema} 
    />)
}
```
## Contributing

The package is made up of 2 main folders:

- /src contains all the source files and components
- /example is a [create-react-app](https://github.com/facebook/create-react-app/) based demo website

To setup and run a local copy:

1.  Clone this repo with `git clone https://github.com/viczaca/react-json-schema-builder`
2.  Run `yarn install` in the root folder
3.  Run `yarn install` in the example folder
4.  In separate terminal windows, run `yarn start` in the root and example folders.

You should now be up and running with live browser reloading of the example website while you work on source files and components in the /src folder.

When you're done working on your changes, submit a PR with the details and include a screenshot if you've changed anything visually.

In order to add new languages:
1.  Create a json in src/locales/new_lang.json with the new translations
2.  Import in src\utils\i18n.ts the new json and append it to resources

## License

MIT © [viczaca](https://github.com/viczaca)
