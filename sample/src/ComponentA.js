import React, { Component } from 'react'

export default class ComponentA extends Component {
    constructor(){
        super()
        this.state = {
            name : "Krishna",
            age : 29,
            mobile : "818283292",
            email : "krishna@gmail.com"
        }
    }

  render() {
    return (
      <div>
        {this.state.name}
        {this.state.age}
        {this.state.mobile}
        {this.state.email}    
    </div>
    )
  }
}
