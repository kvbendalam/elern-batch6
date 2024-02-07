import React, { useContext } from 'react'
import { Context } from './Component1'

function Component3() {
   const val =  useContext(Context)

  return (
    <div>{val}</div>
  )
}

export default Component3