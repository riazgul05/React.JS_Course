import React, { Component } from 'react'
import './App.css'
export default class ClickFunction extends Component {
   HelloFunction(){
        alert("Hello Adil");
      }
  render() {
    return (
      <div className='App'>
        <input type="button" value="Click" onClick={this.HelloFunction}/>
      </div>
    )
  }
}

// import React from 'react'
// import './App.css';

// function ClickFunction() {
//   function HelloFunction(){
//     alert("Hello Brother");
//   }
//   return (
//     <div className='App'>
//         <input type="button" value="Click" onClick={HelloFunction}/>
//     </div>
//   )
// }

// export default ClickFunction