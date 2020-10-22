import * as helpers from '../utils/helpers'

describe('schema', () => {
  test('get schema field', () => {
    const desc = 'Something description'
    const schema = {
      type: 'string',
      description: desc
    }

    const result = helpers.getSchemaField('description', schema)

    expect(result).toBe(desc)
  })

  test('get schema type', () => {
    const schema = {
      type: 'string'
    }

    const result = helpers.getSchemaType(schema)

    expect(result).toBe('string')
  })

  test('get schema title', () => {
    const schema = {
      title: 'Name',
      type: 'string'
    }

    const result = helpers.getSchemaTitle(schema)

    expect(result).toBe('Name')
  })

  test('get schema property', () => {
    const property = {
      type: 'string'
    }
    const schema = {
      type: 'object',
      properties: {
        name: property
      }
    }

    const result = helpers.getSchemaProperty('name')(schema)

    expect(result).toEqual(property)
  })

  test('get schema properties', () => {
    const properties = {
      name: {
        type: 'string'
      }
    }
    const schema = {
      type: 'object',
      properties: properties
    }

    const result = helpers.getSchemaProperties(schema)

    expect(result).toEqual(properties)
  })

  test('get schema items', () => {
    const items = {
      type: 'string'
    }
    const schema = {
      type: 'array',
      items: items
    }

    const result = helpers.getSchemaItems(schema)

    expect(result).toEqual(items)
  })

  test('set schema field', () => {
    const desc = "Something description"
    const schema = {
      type: 'string',
      description: 'Desc'
    }

    const result = helpers.setSchemaField('description', desc, schema)

    expect(helpers.getSchemaField('description', result)).toBe(desc)
  })

  test('set schema type', () => {
    const schema = {
      type: 'string'
    }
    const type = 'number'

    const result = helpers.setSchemaType(type, schema)

    expect(helpers.getSchemaType(result)).toBe(type)
  })

  test('set schema title', () => {
    const schema = {
      type: 'string',
      title: 'Name'
    }
    const title = 'Something'

    const result = helpers.setSchemaTitle(title, schema)

    expect(helpers.getSchemaTitle(result)).toBe(title)
  })

  test('set schema property', () => {
    const schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        }
      }
    }
    const property = { type: 'number' }

    const result = helpers.setSchemaProperty('name')(property, schema)

    expect(helpers.getSchemaProperty('name')(result)).toBe(property)
  })

  test('delete schema property', () => {
    const schemaBefore = {
      type: 'object',
      properties: {
        age: {
          type: 'integer'
        },
        name: {
          type: 'string'
        }
      }
    }
    const schemaAfter = {
      type: 'object',
      properties: {
        age: {
          type: 'integer'
        }
      }
    }

    const result = helpers.deleteSchemaProperty('name')(schemaBefore)

    expect(result).toEqual(schemaAfter)
  })

  test('add schema property', () => {
    const schemaBefore = {
      type: 'object',
      properties: {}
    }

    const result = helpers.addSchemaProperty(schemaBefore)

    expect(helpers.getSchemaProperties(result)).not.toEqual({})
  })

  test('is schema object', () => {
    const result_1 = helpers.isSchemaObject({
      type: 'object'
    })
    const result_2 = helpers.isSchemaObject({
      type: 'string'
    })

    expect(result_1).toBe(true)
    expect(result_2).toBe(false)
  })

  test('is schema array', () => {
    const result_1 = helpers.isSchemaArray({
      type: 'array'
    })
    const result_2 = helpers.isSchemaArray({
      type: 'boolean'
    })

    expect(result_1).toBe(true)
    expect(result_2).toBe(false)
  })

  test('has schema properties', () => {
    const result_1 = helpers.hasSchemaProperties({
      type: 'object',
      properties: {
        name: {
          type: 'string'
        }
      }
    })
    const result_2 = helpers.hasSchemaProperties({
      type: 'object',
      properties: {}
    })

    expect(result_1).toBe(true)
    expect(result_2).toBe(false)
  })

})

describe('common', () => {
  test('create correct key from string', () => {
    const text = 'Náme of the Key '

    const result = helpers.stringToKey(text)

    expect(result).toBe('name_of_the_key')
  })

  test('finds correct element in option list', () => {
    const options = [
      {
        value: 'hello',
        label: '1'
      },
      {
        value: 'bye',
        label: '2'
      },
      {
        value: 'foo',
        label: '3'
      },
      {
        value: 'bar',
        label: '43'
      }
    ]
    const option = {
      value: 'bye',
      label: '2'
    }

    const result = helpers.findOption('bye')(options)

    expect(result).toEqual(option)
  })
})
