import React from 'react'
import Select from 'react-select'
import { schemaTypes } from '../../utils/constants'
import * as helpers from '../../utils/helpers'
import { SchemaType } from '../../utils/types'
import { Label } from '../Label'
import { useTranslation } from 'react-i18next';
import _ from 'lodash/fp'

type Props = {
  type: SchemaType
  onChange: (type: SchemaType) => void
}

const SchemaTypesSelect: React.FunctionComponent<Props> = ({
  type,
  onChange
}: Props) => {
  const {t} = useTranslation()
  const options = React.useMemo(() => _.map((item) => ({...item, label: t(item.label)}), schemaTypes), [schemaTypes,t])
  return (
    <div>
      <Label>{t('type')}</Label>
      <Select
        className=' min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        options={options}
        value={helpers.findOption(type)(options)}
        onChange={(option: any) => onChange(option.value)}
        placeholder={t('type')}
      />
    </div>
  )
}

export default SchemaTypesSelect
