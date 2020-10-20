import React  from 'react'
import { handleEnterPress, handleStringChange } from './Input.helpers'

type Props = {
  onChange: (text: string) => void,
  placeholder?: string,
  value?: string
}

const Input: React.FunctionComponent<Props> = ({ onChange, placeholder, value='' }: Props) => {
  const [localVal, setLocalVal] = React.useState<string>('');

  React.useEffect(() => {
    setLocalVal(value)
  }, [value])

  const onChangeValue = () => {
    if(localVal === value) return

    onChange(localVal)
  }

  return (
    <input
      value={localVal}
      onChange={handleStringChange(setLocalVal)}
      onKeyPress={handleEnterPress(onChangeValue)}
      onBlur={onChangeValue}
      placeholder={placeholder}
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500'
    />
  )
}

export default Input
