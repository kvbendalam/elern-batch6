import React, { Component } from 'react'

class Student extends Component {
    constructor(props){
        super(props)
        this.props = props;
    }

  render() {
    return (
      <div>Student name is {this.props.name}
      salary is {this.props.salary}
      </div>
    )
  }
}

export default Student
