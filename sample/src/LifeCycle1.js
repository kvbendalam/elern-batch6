import React, { Component } from 'react'

export default class LifeCycle1 extends Component {

    constructor(){
        super()
        this.state= {
            counter:1
        }
    }

    componentDidUpdate(){
        console.log("Counter method is updated")
    }

    handleInc = () =>{
        this.setState({
            counter:this.state.counter+1
        })
    }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleInc}>Inc counter</button>
      </div>
    )
  }
}
