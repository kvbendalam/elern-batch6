import React from 'react'

function Listrendering() {
    const [users, setUsers] = React.useState([
        {
            id:1, name:"Krishna", place:"Hyderabad"
        },
        {
            id:2, name:"Madhar", place:"Vijayawada"
        },
        {
            id:3, name:"Sravan", place:"Bangalore"
        },
        {
            id:4, name:"Sharmila", place:"Mumbai"
        }
    ])


  return (
    <div>
        {
            users.map((user)=>{
                return(
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.place}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Listrendering