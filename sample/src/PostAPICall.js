import React, { useEffect } from 'react'
import axios from 'axios'

function PostAPICall() {

    const post =  {
        "userId": 8,
        "id": 77,
        "title": "necessitatibus quasi exercitationem odio",
        "body": "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
      }

    useEffect(()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts', post )
        .then((resp)=>{
            console.log(resp)
        })
    })


    //PUT Method
    const updatedBody = {
        title:"Krishna"
    }

    useEffect(()=>{
        axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedBody)
        .then((resp)=>{
            console.log(resp)
        })
    })


    //Delete Method:
    useEffect(()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then((resp)=>{
            console.log(resp)
        })
    })

  return (
    <div>PostAPICall</div>
  )
}

export default PostAPICall