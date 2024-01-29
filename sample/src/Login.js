import React, { useState } from 'react'
import './Login.css'

export function Login() {
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
    <>
        <h1 style={{color:"red", backgroundColor:"blue"}}>Login</h1>
        <input id="username" type="text" placeholder='Username' onChange={getUsername}/>
        <input id="password" type="password" placeholder='Password' onChange={getPassword}/>
        <button onClick={submitHandler} className='btn'>Sumbit</button>
    </>
  )
}

export function Registration(){
  return (
    <>
      This is registration page
    </>
  )
}