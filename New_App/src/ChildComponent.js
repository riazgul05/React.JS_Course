import React from 'react'

function ChildComponent(props) {
  return (
    <div>
       <button onClick={ () => props.callMethod(' Adil', " Ansari")}>Click Me</button>
    </div>
  )
}

export default ChildComponent

// import React, { Component } from 'react'

// export default class ChildComponent extends Component {

//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.props.callMethod}>Click Me</button> */}
//         <button onClick={ () => this.props.callMethod(' Adil', " Ansari")}>Click Me</button>
//       </div>
//     )
//   }
// }
