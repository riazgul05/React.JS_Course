import React, { Component } from 'react'

 class MyClass extends Component {
  render() {
    return (
      <div>
      <h1>My Name is {this.props.name }</h1>
      <h1>My Age is {this.props.age }</h1>
      {this.props.children}
      </div>
    )
  }
}
export default MyClass