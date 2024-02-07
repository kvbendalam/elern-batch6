import React from 'react'
import { useParams } from 'react-router-dom'

function Emp() {

  const {username} = useParams()

  return (
    <div>Emp username is {username}</div>
  )
}

export default Emp