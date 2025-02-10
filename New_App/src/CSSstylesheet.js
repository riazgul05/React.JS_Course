import React, { Component } from 'react'
import'./CSSstylesheet.css';

export default class CSSstylesheet extends Component {
  render() {
    let x = this.props.check ? 'myFont' : 'myFont2'
    return (
      <div>
        <h1 className={`${x} myFont3`}>My Name is Mohammad Adil</h1>
      </div>
    )
  }
}
