import React, { useEffect } from 'react'

function Hooks() {
    const [counter, setCounter] = React.useState(0)

    // useEffect(()=>{
    //     console.log("Use Effect hook")
    // })

    const handleInc = () =>{
        setCounter(counter+1)
    }

    useEffect(()=>{

        return () =>{
            
        }
    })


    useEffect(()=>{
        console.log("Counter value is changed")
    },[counter])

  return (
    <div>
        <p>{counter}</p>
        <button onClick={handleInc}>Inc counter</button>
    </div>
  )
}

export default Hooks