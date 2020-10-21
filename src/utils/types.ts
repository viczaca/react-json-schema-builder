export type Schema = Record<string, unknown>

export type SchemaType = 'string' | 'number' | 'integer' | 'object' | 'array' | 'boolean'

export type SchemaTypeOption = {value: SchemaType, label: string}