import {
  ArraySchemaFieldOption,
  ArrayValidSchemaField,
  BoolSchemaFieldOption,
  BoolValidSchemaField,
  CommonSchemaFieldOption,
  CommonValidSchemaField,
  IntegerSchemaFieldOption,
  IntegerValidSchemaField,
  NumberSchemaFieldOption,
  NumberValidSchemaField,
  ObjectSchemaFieldOption,
  ObjectValidSchemaField,
  Schema,
  SchemaMenuOption,
  SchemaType,
  SchemaTypeOption,
  StringSchemaFieldOption,
  StringValidSchemaField
} from './types'

export const defaultSchema: Schema = {
  type: 'object',
  properties: {}
}

export const schemaTypes: SchemaTypeOption[] = [
  {
    value: 'string',
    label: 'schemaTypes.text',
  },
  {
    value: 'integer',
    label: 'schemaTypes.integer',
  },
  {
    value: 'number',
    label: 'schemaTypes.decimal',
  },
  {
    value: 'boolean',
    label: 'schemaTypes.boolean',
  },
  {
    value: 'object',
    label: 'schemaTypes.object',
  },
  {
    value: 'array',
    label: 'schemaTypes.array',
  }
]

export const formatOptions = [
  {
    value: 'date-time',
    label: 'formatOptions.date',
  },
  {
    value: 'email',
    label: 'formatOptions.email',
  },
  {
    value: 'hostname',
    label: 'formatOptions.hostname',
  },
  {
    value: 'ipv4',
    label: 'formatOptions.ipv4',
  },
  {
    value: 'ipv6',
    label: 'formatOptions.ipv6',
  },
  {
    value: 'uri',
    label: 'formatOptions.uri',
  }
]

const commonValidProperties: CommonValidSchemaField[] = ['description', 'type' , 'title']

export const stringValidSchemaProperties: StringValidSchemaField[] = [
  ...commonValidProperties,
  'enum',
  'format',
  'maxLength',
  'minLength',
  'pattern'
]

export const numberValidSchemaProperties: NumberValidSchemaField[] = [
  ...commonValidProperties,
  'maximum','minimum','multipleOf'
]

export const integerValidSchemaProperties: IntegerValidSchemaField[] = [
  ...commonValidProperties,
  'maximum','minimum','multipleOf'
]

export const boolValidSchemaProperties: BoolValidSchemaField[] = [
  ...commonValidProperties,
]

export const arrayValidSchemaProperties: ArrayValidSchemaField[] = [
  ...commonValidProperties,
  'maxItems', 'minItems', 'uniqueItems', 'items'
]

export const objectValidSchemaProperties: ObjectValidSchemaField[] = [
  ...commonValidProperties,
  'required', 'properties'
]

const commonSchemaOptions: CommonSchemaFieldOption[] = [
  { value: 'description', label: 'description', type: 'text' }
]

export const stringSchemaOptions: StringSchemaFieldOption[] = [
  ...commonSchemaOptions,
  { value: 'minLength', label: 'minLength', type: 'number' },
  { value: 'maxLength', label: 'maxLength', type: 'number' },
  { value: 'enum', label: 'options', type: 'multi_creatable' },
  { value: 'pattern', label: 'pattern', type: 'text' },
  {
    value: 'format',
    label: 'format',
    type: 'select',
    optionList: formatOptions
  }
]

export const numberSchemaOptions: NumberSchemaFieldOption[] = [
  ...commonSchemaOptions,
  { value: 'minimum', label: 'requirement.minimum', type: 'number' },
  { value: 'maximum', label: 'requirement.maximum', type: 'number' },
  { value: 'multipleOf', label: 'requirement.multipleOf', type: 'number' }
]

export const integerSchemaOptions: IntegerSchemaFieldOption[] = [
  ...commonSchemaOptions,
  { value: 'minimum', label: 'requirement.minimum', type: 'number' },
  { value: 'maximum', label: 'requirement.maximum', type: 'number' },
  { value: 'multipleOf', label: 'requirement.multipleOf', type: 'number' }
]

export const boolSchemaOptions: BoolSchemaFieldOption[] = [
  ...commonSchemaOptions
]

export const objectSchemaOptions: ObjectSchemaFieldOption[] = [
  ...commonSchemaOptions,
  { value: 'required', label: 'requirement.required', type: 'required' }
]

export const arraySchemaOptions: ArraySchemaFieldOption[] = [
  ...commonSchemaOptions,
  { value: 'minItems', label: 'requirement.minItems', type: 'number' },
  { value: 'maxItems', label: 'requirement.maxItems', type: 'number' },
  { value: 'uniqueItems', label: 'requirement.uniqueItems', type: 'boolean' }
]

export const typeToOptions: Record<SchemaType, SchemaMenuOption[]> = {
  string: stringSchemaOptions,
  integer: integerSchemaOptions,
  number: numberSchemaOptions,
  boolean: boolSchemaOptions,
  array: arraySchemaOptions,
  object: objectSchemaOptions
}

export const typeToValidFields: Record<SchemaType, string[]> = {
  string: stringValidSchemaProperties,
  integer: integerValidSchemaProperties,
  number: numberValidSchemaProperties,
  boolean: boolValidSchemaProperties,
  object: objectValidSchemaProperties,
  array: arrayValidSchemaProperties
}
