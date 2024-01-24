import React, { useState } from 'react'

function ComponentB() {

  const [name, setName] = useState('Krishna')

  return (
    <div>{name}</div>
  )
}

export default ComponentB