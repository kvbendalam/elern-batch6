import React from 'react'
import Component2 from './Component2'

export const Context = React.createContext()

function Component1() {
  return (
    <Context.Provider value={'Krishna'}>
        <Component2/>
    </Context.Provider>
  )
}

export default Component1