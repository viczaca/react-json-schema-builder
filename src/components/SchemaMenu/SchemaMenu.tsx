import React from 'react'
import _ from 'lodash/fp'

import { Schema, SchemaMenuOption } from '../../utils/types'
import * as helpers from '../../utils/helpers'
import Select from 'react-select'
import SchemaMenuList from './SchemaMenuList'
import { useTranslation } from 'react-i18next'

type Props = {
  schema: Schema
  onChange: (schema: Schema) => void
}

const SchemaMenu: React.FunctionComponent<Props> = ({
  schema,
  onChange
}: Props) => {
  const { t } = useTranslation()

  const type = helpers.getSchemaType(schema)
  const allOptions = React.useMemo(
    () => helpers.translateLabels(t, helpers.getSchemaMenuOptions(type)),
    [type, t]
  )

  const displayFields = React.useMemo(() => {
    const fields = helpers.getAllSchemaKeys(schema)
    return _.filter((item) => _.includes(item.value, fields), allOptions)
  }, [schema, allOptions])
  
  return (
    <div className='min-w-md'>
      <SchemaMenuList
        fields={displayFields}
        schema={schema}
        onChange={onChange}
      />
      <Select
        className='min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        options={_.difference(allOptions, displayFields)}
        value={null}
        onChange={(option: any) =>
          onChange(
            helpers.setSchemaField(
              (option as SchemaMenuOption).value,
              undefined,
              schema
            )
          )
        }
        placeholder={t('addFields')}
      />
    </div>
  )
}

export default SchemaMenu
