import React, { useState } from 'react'

function FunctionalDemo() {

  const [counter, setCounter] = useState(0)

  const handleInc = () =>{
    setCounter(counter+1)
  }

  return (
    <div>
        <p>{counter}</p>
        <button onClick={handleInc}>Increment Counter</button>
    </div>
  )
}

export default FunctionalDemo