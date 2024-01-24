import React from 'react'

function Cars(props) {
  return (
    <div>{props.data.map((car)=>{
        return(
            <div>
                <p>{car.no}</p>
                <p>{car.name}</p>
                <p>{car.color}</p>
                <p>{car.price}</p>
            </div>
        )
    })}</div>
  )
}

export default Cars