import React, { Component } from 'react'

export default class Cards extends Component {

    constructor(){
        super()
        this.state= {
            data:[]
        }
    }

    componentDidMount(){
        fetch('https://dummyjson.com/products')
        .then((res)=> res.json())
        .then((resp)=>{
            this.setState({data:resp.products})
        })
    }


  render() {
    return (
        <div class="container" >
        <div className='row'>
        {this.state.data.map((product)=>{
            return(
               
                    <div className='col-3'>
                        <div class="card" style={{width: "18rem"}}>
                        <img src={product.thumbnail} class="card-img-top" alt="..." style={{height:"104px"}}/>
                        <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text">{product.description}</p>
                            <a href="#" class="btn btn-primary">{product.price}</a>
                        </div>
                        </div>
                </div>
             
            )
        })}
      </div>
      </div>
    )
  }
}
