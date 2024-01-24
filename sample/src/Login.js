import React, { useState } from 'react'

function Login() {
    const [username, setUsername ] = useState('')
    const [password, setPassword] = useState('')

    const getUsername = (event) =>{
        setUsername(event.target.value)
    }

    const getPassword = (event) =>{
        setPassword(event.target.value)
    }

   const submitHandler = () =>{
        console.log(username, password)
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='Username' onChange={getUsername}/>
        <input type="password" placeholder='Password' onChange={getPassword}/>
        <button onClick={submitHandler}>Sumbit</button>
    </div>
  )
}

export default Login