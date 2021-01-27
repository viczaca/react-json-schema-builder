import React from 'react'
import _ from 'lodash/fp'

import {SchemaCreator} from '../SchemaCreator'
import { Schema } from '../../utils/types'
import { defaultSchema } from '../../utils/constants'
import '../../tailwind.styles.css'
import { useTranslation } from 'react-i18next'
import '../../utils/i18n';

type Props = {
  locale?: string
  schema: Schema
  onChange?: (newSchema: Schema) => void
}

const JSONSchemaBuilder: React.FunctionComponent<Props> = ({
  locale = "en",
  schema,
  onChange
}: Props) => {
  const { i18n, ready } = useTranslation('null',{ useSuspense: false });
  React.useEffect(() => {i18n.changeLanguage(locale)}, [locale])
  if (!ready) {
    return null
  }
  return (
    <div>
      <SchemaCreator schema={!_.isEmpty(schema) ? schema : defaultSchema} onChange={onChange}/>
    </div>
  )
}

export default JSONSchemaBuilder
