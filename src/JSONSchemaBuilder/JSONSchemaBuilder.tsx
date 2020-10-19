import React from 'react'
import {Schema} from '../types'

type Props = {
  schema: Schema
}

const JSONSchemaBuilder: React.FunctionComponent<Props> = ({ schema }: Props) => {
  return <div className="text-red-600">Example Component: {schema}</div>
}

export default JSONSchemaBuilder