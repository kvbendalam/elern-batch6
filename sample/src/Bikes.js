import React from 'react'

function Bikes(props) {
  return (
    <table border="1">
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
        </tr>
        {props.data.map((row)=>{
            return(
                <tr>
                    <td>{row.no}</td>
                    <td>{row.name}</td>
                    <td>{row.color}</td>
                    <td>{row.price}</td>
                </tr>
            )
        })}
    </table>
  )
}

export default Bikes