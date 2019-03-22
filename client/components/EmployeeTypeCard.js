import React from 'react'

const EmployeeTypeCard = props => {
  const {backgroundColor, text} = props
  return (
    <div style={{backgroundColor}}>
      <h1>{text}</h1>
    </div>
  )
}

export default EmployeeTypeCard
