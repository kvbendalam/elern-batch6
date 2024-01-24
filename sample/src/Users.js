import React from 'react'

function Users(props) {
  return (
   <table border="1">
      <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Place</th>
            <th>Door No</th>
            <th>Pin</th>
            <th>Street</th>
        </tr>
    {props.data.map((user)=>{
        return(
            <tr>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.place}</td>
                <td>{user.address.dno}</td>
                <td>{user.address.pin}</td>
                <td>{user.address.street}</td>
            </tr>
        )
    })}
   </table>
  )
}

export default Users