import React from 'react'

const SchemaBox: React.FunctionComponent = ({children}) => {
  return(
    <div className="border-l-2 border-b-2 border-blue-400 pl-2 pb-2 pt-2 rounded-bl">
      {children}
    </div>
  )
}

export default SchemaBox