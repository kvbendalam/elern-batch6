import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApiCallsusingAxios() {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp)=>{
            setData(resp.data)
        })
    })

    


  return (
    <div>
        {
            data.map((posts)=>{
                return(
                    <div>
                        {posts.title}
                    </div>
                )
            })
        }
    </div>
  )
}

export default ApiCallsusingAxios