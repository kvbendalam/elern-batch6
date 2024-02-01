import React, { Component } from 'react'

export default class LifeCyclce extends Component {
    constructor(){
        super()
        this.state={
            data : []
        }
    }

    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/todos')
       .then((res)=>res.json())
       .then((response)=>{
        this.setState({
            data:response
        })
       })
    }

  render() {
    return (
      <div>{this.state.data.map((row)=>{
        return(
            <>
            <p>{row.title}</p>
            </>
        )
      })}</div>
    )
  }
}


