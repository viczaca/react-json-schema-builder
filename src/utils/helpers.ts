import _ from 'lodash/fp'
import { Schema} from '../types'

export const getSchemaType = _.get(['type'])
export const getSchemaTitle = _.get(['title'])
export const getSchemaProperties = _.get(['properties'])
export const getSchemaProperty = (key: string) => _.get(['properties', key])

export const setSchemaType = _.set(['type'])
export const setSchemaTitle = _.set(['title'])
export const setSchemaProperty = (key: string) => _.set(['properties', key])

export const deleteSchemaProperty = (key: string) => _.omit([`properties.${key}`])
export const addSchemaProperty = (schema: Schema) => setSchemaProperty(`__${Date.now()}__`)({}, schema)

export const isSchemaObject = (schema: Schema) => getSchemaType(schema) === 'object'
export const isSchemaArray = (schema: Schema) => getSchemaType(schema) === 'array'
export const hasSchemaProperties= (schema: Schema) => !_.isEmpty(getSchemaProperties(schema))

export const stringToKey = (text: string) => {
  return text?.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/\s/g, "_").toLowerCase()
}

export const findOption = (value: string) => _.find(['value', value])

