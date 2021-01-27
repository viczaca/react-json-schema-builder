import _ from 'lodash/fp'
import { typeToOptions, typeToValidFields } from './constants'
import { Schema, SchemaType } from './types'

export const getAllSchemaKeys = _.keys

export const getSchemaField = _.get

export const getSchemaFields = _.pick

export const getSchemaType = getSchemaField('type')

export const getSchemaTitle = getSchemaField('title')

export const getSchemaProperty = (key: string) =>
  getSchemaField(['properties', key])

export const getSchemaProperties = getSchemaField('properties')

export const getSchemaItems = getSchemaField('items')

export const getSchemaRequired = getSchemaField('required')

export const getSchemaRequiredProperties = (schema: Schema) => {
  const required = getSchemaRequired(schema)
  const properties = getSchemaProperties(schema)
  return getSchemaFields(required, properties)
}

export const setSchemaField = _.set

export const setSchemaType = setSchemaField('type')

export const setSchemaTitle = setSchemaField('title')

export const setSchemaProperties = setSchemaField('properties')

export const setSchemaProperty = (key: string) =>
  setSchemaField(['properties', key])

export const setSchemaItems = setSchemaField('items')

export const deleteSchemaField = _.unset

export const deleteSchemaProperty = (key: string) =>
  deleteSchemaField(['properties', key])

export const addSchemaProperty = (schema: Schema) =>
  setSchemaProperty(`__${_.now()}__`)({}, schema)

export const renameSchemaField = (oldKey: string, newKey: string) =>
  //Rename field key but maintains object "order"
  _.flow([
    _.entries,
    _.map(([k, v]) => ({ [k === oldKey ? newKey : k]: v })),
    _.reduce(_.assign, {})
  ])

export const renameSchemaProperty = (
  oldKey: string,
  newKey: string,
  schema: Schema
) =>
  _.flow([
    getSchemaProperties,
    renameSchemaField(oldKey, newKey),
    (p) => setSchemaProperties(p, schema)
  ])(schema)

export const isSchemaObject = (schema: Schema) =>
  getSchemaType(schema) === 'object'

export const isSchemaArray = (schema: Schema) =>
  getSchemaType(schema) === 'array'

export const isFieldRequired = (key: string) =>
  _.flow([getSchemaRequired, _.contains(key)])

export const hasSchemaProperties = (schema: Schema) =>
  !_.isEmpty(getSchemaProperties(schema))

export const hasSchemaItems = (schema: Schema) =>
  !_.isEmpty(getSchemaItems(schema))

export const getSchemaMenuOptions = (type: SchemaType) =>
  _.get(type, typeToOptions)

export const findOption = (value: string) => _.find(['value', value])

export const optionsToStrings = _.map('value')

export const stringsToOptions = _.map((s) => ({ label: s, value: s }))

export const schemaFieldAsOption = (key: string, schema: Schema) => {
  const title = getSchemaTitle(schema)
  if (!_.isEmpty(title)) {
    return { value: key, label: title }
  }
  return { value: key, label: key }
}

export const fieldsToOptions = _.flow([
  _.entries,
  _.map(([key, val]) => schemaFieldAsOption(key, val))
])

export const schemaPropertiesAsOptions = _.flow([
  getSchemaProperties,
  fieldsToOptions
])

export const schemaRequiredPropertiesAsOptions = _.flow(
  getSchemaRequiredProperties,
  fieldsToOptions
)

export const getValidFields = (type: SchemaType) =>
  _.get(type, typeToValidFields)

export const removeWrongFields = (schema: Schema) => {
  const type = getSchemaType(schema)
  const fields = getValidFields(type)
  return getSchemaFields(fields, schema)
}

export const setSchemaTypeAndRemoveWrongFields = _.flow([
  setSchemaType,
  removeWrongFields
])

export const translateLabels = (t: (text: string) => string, list: any[]) =>
  _.map((item) => ({ ...item, label: t(item.label) }), list)