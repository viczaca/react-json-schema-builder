import * as helper from '../JSONSchemaBuilder/JSONSchemaBuilder.helpers' 
import schema from './fixtures/schema.json'

test("gets correct type key from schema", () => {
  const result = helper.getSchemaType(schema) 

  expect(result).toBe('object')
})