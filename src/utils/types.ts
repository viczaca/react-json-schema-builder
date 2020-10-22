export type Schema = Record<string, unknown>

export type SchemaType =
  | 'string'
  | 'number'
  | 'integer'
  | 'object'
  | 'array'
  | 'boolean'

export type SchemaTypeOption = { value: SchemaType; label: string }

export type StringSchemaField =
  | 'description'
  | 'enum'
  | 'minLength'
  | 'maxLength'
  | 'pattern'
  | 'format'
export type NumberSchemaField = 'description' | 'minimum' | 'maximum'
export type IntegerSchemaField = 'description' | 'minimum' | 'maximum'
export type BoolSchemaField = 'description'
export type ObjectSchemaField = 'description' | 'required'
export type ArraySchemaField =
  | 'description'
  | 'uniqueItems'
  | 'minItems'
  | 'maxItems'

export type SchemaFieldOptionType = 'text' | 'number' | 'boolean' | 'multi_creatable'

export type SchemaFieldOption = {
  label: string,
  type: SchemaFieldOptionType
}

export type StringSchemaFieldOption = SchemaFieldOption & {
  value: StringSchemaField
}
export type NumberSchemaFieldOption = SchemaFieldOption & {
  value: NumberSchemaField
}
export type IntegerSchemaFieldOption = SchemaFieldOption & {
  value: IntegerSchemaField
}
export type BoolSchemaFieldOption = SchemaFieldOption & {
  value: BoolSchemaField
}
export type ObjectSchemaFieldOption = SchemaFieldOption & {
  value: ObjectSchemaField
}
export type ArraySchemaFieldOption = SchemaFieldOption & {
  value: ArraySchemaField
}

export type SchemaMenuOption =
  | StringSchemaFieldOption
  | NumberSchemaFieldOption
  | IntegerSchemaFieldOption
  | BoolSchemaFieldOption
  | ObjectSchemaFieldOption
  | ArraySchemaFieldOption
