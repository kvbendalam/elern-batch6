import React, { useEffect, useState } from 'react'

function ProductsinFun() {

 const [data, setData ] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((resp)=>{
            setData(resp.products)
        })
    })

  return (
    <div>
        {
            data.map((res)=>{
                return(
                    <div>
                        {res.title}
                    </div>
                )
            })
        }

    </div>
  )
}

export default ProductsinFun