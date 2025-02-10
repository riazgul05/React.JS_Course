import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    ParentMethod =(childName, surName) =>{
       // alert("Hello From Parent" + chilName+''+ surName)
    alert(`Hello From Parent : Name = ${childName} And surname = ${surName}`);
    }
  render() {
    return (
      <div>
        <ChildComponent callMethod={this.ParentMethod}/>
      </div>
    ) 
  }
}
