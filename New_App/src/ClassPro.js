import React, { Component } from 'react'
import PropTypes from 'prop-types'
 class ClassPro extends Component {
  render() {
    return (
      <div>
      <h1>My Name is {this.props.name }</h1>
      <h1>My Age is {this.props.age }</h1>
     
      </div>
    )
  }
}
ClassPro.propTypes = {
    name : PropTypes.string
}
export default ClassPro