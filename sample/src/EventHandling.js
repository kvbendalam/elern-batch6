import React, { Component } from 'react'

export default class EventHandling extends Component {
    constructor(){
        super()
        this.state ={
            counter:0
        }
    }

    incrementCounter = () =>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    decrementCounter = () => {
        this.setState({
            counter: this.state.counter-1
        })
    }

    inc5 = () => {
        this.setState({
            counter:this.state.counter+5
        })
    }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment Count by 1</button>
        <button onClick={this.decrementCounter}>Decrement Count by 1</button>
        <button onClick={this.inc5}>Inc by 5</button>
      </div>
    )
  }
}
