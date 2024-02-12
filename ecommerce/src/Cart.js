import React from 'react'

function Cart(props) {
    console.log(props.data)

    var total = 0;

    props.data.map((product)=>{
        return(
            total = total + product.data.price
        )
    })

  return (
    <div class="row">
        {props.data.map((cartItem)=>{
            return(
                <div class="col-4">
                <div class="card" style={{margin:"4%", width:"24rem" }}>
                <img src={cartItem.data.img} class="card-img-top" alt="..." style={{height:"150px"}}/>
                <div class="card-body">
                    <h5 class="card-title">{cartItem.data.name}</h5>
                    <p class="card-text">{cartItem.data.desc}</p>
                    <h5 class="card-title">{cartItem.data.price}</h5>
                </div>
                </div>
                </div>
            )
        })}

        <div>
            Total Cart Value :{total}
        </div>
    </div>
  )
}

export default Cart