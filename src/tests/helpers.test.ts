import {
  arraySchemaOptions,
  arrayValidSchemaProperties,
  boolSchemaOptions,
  boolValidSchemaProperties,
  integerSchemaOptions,
  integerValidSchemaProperties,
  numberSchemaOptions,
  numberValidSchemaProperties,
  objectSchemaOptions,
  objectValidSchemaProperties,
  stringSchemaOptions,
  stringValidSchemaProperties
} from '../utils/constants'
import * as helpers from '../utils/helpers'

describe('schema', () => {
  test('get all schema keys', () => {
    const schema = {
      type: 'string',
      description: 'Something'
    }

    const result = helpers.getAllSchemaKeys(schema)

    expect(result).toEqual(['type', 'description'])
  })

  test('get schema field', () => {
    const desc = 'Something description'
    const schema = {
      type: 'string',
      description: desc
    }

    const result = helpers.getSchemaField('description', schema)

    expect(result).toBe(desc)
  })

  test('get schema fields', () => {
    const schemaBefore = {
      type: 'string',
      description: 'Something description'
    }
    const schemaAfter = {
      type: 'string'
    }

    const result = helpers.getSchemaFields(['type'], schemaBefore)

    expect(result).toEqual(schemaAfter)
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

  test('get schema required', () => {
    const schema = {
      type: 'object',
      required: ['name'],
      properties: {
        name: {
          type: 'string'
        }
      }
    }
    const required = ['name']

    const result = helpers.getSchemaRequired(schema)

    expect(result).toEqual(required)
  })

  test('get schema required properties', () => {
    const schema = {
      type: 'object',
      required: ['name'],
      properties: {
        name: {
          type: 'string'
        },
        surname: {
          type: 'string'
        }
      }
    }
    const properties = {
      name: {
        type: 'string'
      }
    }

    const result = helpers.getSchemaRequiredProperties(schema)

    expect(result).toEqual(properties)
  })

  test('set schema field', () => {
    const desc = 'Something description'
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

  test('set schema properties', () => {
    const schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        }
      }
    }
    const properties = {
      hello: {
        type: 'string'
      }
    }

    const result = helpers.setSchemaProperties(properties, schema)

    expect(helpers.getSchemaProperties(result)).toEqual(properties)
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

  test('set schema items', () => {
    const schema = {
      type: 'array',
      items: {
        type: 'string'
      }
    }
    const items = {
      type: 'integer'
    }

    const result = helpers.setSchemaItems(items, schema)

    expect(helpers.getSchemaItems(result)).toEqual(items)
  })

  test('delete schema field', () => {
    const schemaBefore = {
      type: 'string',
      description: 'Something'
    }
    const schemaAfter = {
      type: 'string'
    }

    const result = helpers.deleteSchemaField('description')(schemaBefore)

    expect(result).toEqual(schemaAfter)
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

  test('rename schema field', () => {
    const schemaBefore = {
      type: 'object',
      description: 'Something'
    }
    const schemaAfter = {
      type: 'object',
      updated: 'Something'
    }

    const result = helpers.renameSchemaField(
      'description',
      'updated'
    )(schemaBefore)

    expect(result).toEqual(schemaAfter)
  })

  test('rename schema property', () => {
    const schemaBefore = {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        surname: {
          type: 'string'
        }
      }
    }
    const schemaAfter = {
      type: 'object',
      properties: {
        updated: {
          type: 'string'
        },
        surname: {
          type: 'string'
        }
      }
    }

    const result = helpers.renameSchemaProperty('name', 'updated', schemaBefore)

    expect(result).toEqual(schemaAfter)
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

  test('is field required', () => {
    const schema = {
      type: 'object',
      required: ['name'],
      properties: {
        name: {
          type: 'string'
        },
        surname: {
          type: 'string'
        }
      }
    }

    const result_1 = helpers.isFieldRequired('name')(schema)
    const result_2 = helpers.isFieldRequired('surname')(schema)

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

  test('has schema items', () => {
    const result_1 = helpers.hasSchemaItems({
      type: 'array',
      items: {
        type: 'string'
      }
    })
    const result_2 = helpers.hasSchemaItems({
      type: 'array',
      items: {}
    })

    expect(result_1).toBe(true)
    expect(result_2).toBe(false)
  })

  test('get schema menu options', () => {
    const result_1 = helpers.getSchemaMenuOptions('string')
    const result_2 = helpers.getSchemaMenuOptions('integer')
    const result_3 = helpers.getSchemaMenuOptions('number')
    const result_4 = helpers.getSchemaMenuOptions('boolean')
    const result_5 = helpers.getSchemaMenuOptions('object')
    const result_6 = helpers.getSchemaMenuOptions('array')

    expect(result_1).toEqual(stringSchemaOptions)
    expect(result_2).toEqual(integerSchemaOptions)
    expect(result_3).toEqual(numberSchemaOptions)
    expect(result_4).toEqual(boolSchemaOptions)
    expect(result_5).toEqual(objectSchemaOptions)
    expect(result_6).toEqual(arraySchemaOptions)
  })

  test('options to strings', () => {
    const options = [
      { value: 'name', label: 'Name' },
      { value: 'surname', label: 'surname' }
    ]
    const strings = ['name', 'surname']

    const result = helpers.optionsToStrings(options)

    expect(result).toEqual(strings)
  })

  test('strings to options', () => {
    const strings = ['name', 'surname']
    const options = [
      { value: 'name', label: 'name' },
      { value: 'surname', label: 'surname' }
    ]

    const result = helpers.stringsToOptions(strings)

    expect(result).toEqual(options)
  })

  test('schema field as option', () => {
    const result_1 = helpers.schemaFieldAsOption('name', {
      title: 'Naming',
      type: 'string'
    })
    const result_2 = helpers.schemaFieldAsOption('surname', {
      type: 'string'
    })

    expect(result_1).toEqual({ value: 'name', label: 'Naming' })
    expect(result_2).toEqual({ value: 'surname', label: 'surname' })
  })

  test('fields to options', () => {
    const schema = {
      name: {
        title: 'Naming',
        type: 'string'
      },
      surname: {
        type: 'string'
      }
    }
    const options = [
      { value: 'name', label: 'Naming' },
      { value: 'surname', label: 'surname' }
    ]

    const result = helpers.fieldsToOptions(schema)

    expect(result).toEqual(options)
  })

  test('schema properties as options', () => {
    const schema = {
      type: 'object',
      properties: {
        name: {
          title: 'Name',
          type: 'string'
        },
        surname: {
          type: 'string'
        }
      }
    }
    const options = [
      { value: 'name', label: 'Name' },
      { value: 'surname', label: 'surname' }
    ]

    const result = helpers.schemaPropertiesAsOptions(schema)

    expect(result).toEqual(options)
  })

  test('schema required properties as options', () => {
    const schema = {
      type: 'object',
      required: ['name'],
      properties: {
        name: {
          title: 'Naming',
          type: 'string'
        },
        surname: {
          type: 'string'
        }
      }
    }
    const options = [{ value: 'name', label: 'Naming' }]

    const result = helpers.schemaRequiredPropertiesAsOptions(schema)

    expect(result).toEqual(options)
  })

  test('get valid fields', () => {
    const result_1 = helpers.getValidFields('string')
    const result_2 = helpers.getValidFields('integer')
    const result_3 = helpers.getValidFields('number')
    const result_4 = helpers.getValidFields('boolean')
    const result_5 = helpers.getValidFields('object')
    const result_6 = helpers.getValidFields('array')

    expect(result_1).toEqual(stringValidSchemaProperties)
    expect(result_2).toEqual(integerValidSchemaProperties)
    expect(result_3).toEqual(numberValidSchemaProperties)
    expect(result_4).toEqual(boolValidSchemaProperties)
    expect(result_5).toEqual(objectValidSchemaProperties)
    expect(result_6).toEqual(arrayValidSchemaProperties)
  })

  test('remove wrong fields', () => {
    const schemaBefore = {
      type: 'string',
      required: ['name'],
      description: 'Something',
      properties: {
        name: {
          title: 'Naming',
          type: 'string'
        },
        surname: {
          type: 'string'
        }
      }
    }

    const schemaAfter = {
      type: 'string',
      description: 'Something'
    }

    const result = helpers.removeWrongFields(schemaBefore)

    expect(result).toEqual(schemaAfter)
  })

  test('set schema type and remove wrong fields', () => {
    const schemaBefore = {
      type: 'integer',
      minimum: 3,
      maximum: 5,
      description: 'Something',
    }

    const schemaAfter = {
      type: 'object',
      description: 'Something',
    }

    const result = helpers.setSchemaTypeAndRemoveWrongFields('object', schemaBefore)

    expect(result).toEqual(schemaAfter)
  })

  test('find option', () => {
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
