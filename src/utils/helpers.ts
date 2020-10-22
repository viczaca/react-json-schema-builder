import _ from 'lodash/fp'
import { typeToOptions } from './constants'
import { Schema, SchemaType } from './types'

export const getAllSchemaFields = _.keys
export const getSchemaField = _.get
export const getSchemaType = getSchemaField('type')
export const getSchemaTitle = getSchemaField('title')
export const getSchemaProperty = (key: string) =>
  getSchemaField(['properties', key])
export const getSchemaProperties = getSchemaField('properties')
export const getSchemaItems = getSchemaField('items')

export const setSchemaField = _.set
export const setSchemaType = setSchemaField('type')
export const setSchemaTitle = setSchemaField('title')
export const setSchemaProperty = (key: string) =>
  setSchemaField(['properties', key])
export const setSchemaItems = setSchemaField('items')


export const deleteSchemaField = _.omit
export const deleteSchemaProperty = (key: string) =>
  deleteSchemaField([`properties.${key}`])
export const addSchemaProperty = (schema: Schema) =>
  setSchemaProperty(`__${_.now()}__`)({}, schema)

export const isSchemaObject = (schema: Schema) =>
  getSchemaType(schema) === 'object'
export const isSchemaArray = (schema: Schema) =>
  getSchemaType(schema) === 'array'
export const hasSchemaProperties = (schema: Schema) =>
  !_.isEmpty(getSchemaProperties(schema))
export const hasSchemaItems = (schema: Schema) =>
  !_.isEmpty(getSchemaItems(schema))

export const getSchemaMenuOptions = (type: SchemaType) =>
  _.get(type, typeToOptions)

export const stringToKey = _.snakeCase

export const findOption = (value: string) => _.find(['value', value])

export const optionsToStrings = _.map('value')
export const stringsToOptions = _.map((s) => ({label: s, value: s}))
