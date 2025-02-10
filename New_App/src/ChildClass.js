import React, { Component } from 'react'

export default class ChildClass extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Called..");
    }
  render() {
    return (
      <div>
        <h1>Hey Adil Brother..</h1>
      </div>
    )
  }
}
