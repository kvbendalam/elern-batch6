import React from 'react'

function PropsInFun(props) {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.email}</p>
    </div>
  )
}

export default PropsInFun