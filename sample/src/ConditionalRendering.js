import React from 'react'
import Hyderabad from './Hyderabad'
import Bangalore from './Bangalore'

function ConditionalRendering() {

    const [user, setUser] = React.useState([
        {id:1, name:"Krishna", place:"Hyderabad"},
        {id:2, name:"Madhar", place:"Pune"},
        {id:3, name:"Krishna", place:"Pune"},
        {id:4, name:"Krishna", place:"Hyderabad"},
    ])


  return (
    <div>
        {
            user.map((u)=>{
                return(
                    <>
                        {u.place == "Hyderabad"? <Hyderabad/> : <Bangalore/> }
                    </>
                )
            })
        }
    </div>
  )
}

export default ConditionalRendering