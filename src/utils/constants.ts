import {
  ArraySchemaFieldOption,
  BoolSchemaFieldOption,
  IntegerSchemaFieldOption,
  NumberSchemaFieldOption,
  ObjectSchemaFieldOption,
  SchemaMenuOption,
  SchemaType,
  SchemaTypeOption,
  StringSchemaFieldOption
} from './types'

export const schemaTypes: SchemaTypeOption[] = [
  {
    value: 'string',
    label: 'Text'
  },
  {
    value: 'integer',
    label: 'Integer'
  },
  {
    value: 'number',
    label: 'Decimal'
  },
  {
    value: 'boolean',
    label: 'Boolean'
  },
  {
    value: 'object',
    label: 'Object'
  },
  {
    value: 'array',
    label: 'List'
  }
]

export const stringSchemaOptions: StringSchemaFieldOption[] = [
  { value: 'description', label: 'Description', type: 'text' },
  { value: 'minLength', label: 'Min Length', type: 'number' },
  { value: 'maxLength', label: 'Max Length', type: 'number' },
  { value: 'enum', label: 'Options', type: 'creatable_multi_select' },
]

export const numberSchemaOptions: NumberSchemaFieldOption[] = [
  { value: 'description', label: 'Description', type: 'text' },
  { value: 'minimum', label: 'Minimum', type: 'text' },
  { value: 'maximum', label: 'Maximum', type: 'text' },
]

export const integerSchemaOptions: IntegerSchemaFieldOption[] = [
  { value: 'description', label: 'Description', type: 'text' },
  { value: 'minimum', label: 'Minimum', type: 'text' },
  { value: 'maximum', label: 'Maximum', type: 'text' },
]

export const boolSchemaOptions: BoolSchemaFieldOption[] = [
  { value: 'description', label: 'Description', type: 'text' },
]

export const objectSchemaOptions: ObjectSchemaFieldOption[] = [
  { value: 'description', label: 'Description', type: 'text' },
]

export const arraySchemaOptions: ArraySchemaFieldOption[] = [
  { value: 'description', label: 'Description', type: 'text' },
  { value: 'minItems', label: 'Min Items', type: 'number' },
  { value: 'maxItems', label: 'Max Items', type: 'number' },
  { value: 'uniqueItems', label: 'Unique Items', type: 'boolean' },
]

export const typeToOptions: Record<SchemaType, SchemaMenuOption[]> = {
  string: stringSchemaOptions,
  integer: integerSchemaOptions,
  number: numberSchemaOptions,
  boolean: boolSchemaOptions,
  array: arraySchemaOptions,
  object: objectSchemaOptions
}
