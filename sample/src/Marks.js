import React from 'react'

function Marks(props) {
  return (
    <table border="1">
        <tr>
            <th>R.NO</th>
            <th>Name</th>
            <th>Telugu</th>
            <th>Hindi</th>
            <th>computers</th>
        </tr>
        <tr>
            <td>{props.rno}</td>
            <td>{props.name}</td>
            <td>{props.telugu}</td>
            <td>{props.hindi}</td>
            <td>{props.computers}</td>
        </tr>
        </table>
  )
}

export default Marks