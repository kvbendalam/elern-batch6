import React from 'react'

function Cards(props) {
  return (
    <div class="row">
        {
            props.data.map((product)=>{
                return(
                    <div class="col-4">
                    <div class="card" style={{margin:"4%", width:"24rem" }}>
                    <img src={product.img} class="card-img-top" alt="..." style={{height:"150px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">{product.desc}</p>
                        <h5 class="card-title">{product.price}</h5>
                        <p class="btn btn-primary" onClick={()=>props.handleCartData(product)}>Add Cart</p>
                    </div>
                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cards