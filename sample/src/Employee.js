import React from 'react'

function Employee(props){
    return (
        <div>
           <p>Employee name is  {props.name }</p> 
           <p>her salary is {props.salary}</p>
        </div>
    )
}

export default Employee;