import React, { Component } from 'react'

export default class BindingEvent extends Component {
    constructor() {
      super()
    //this.HandleEvent = this.HandleEvent.bind(this )
      this.state = {
         name:"Adil"
      }
    }
    // HandleEvent(){
    //    // console.log("Hello ", this);
    //     this.setState({
    //         name:"Kumar"
    //     });
    // }
    HandleEvent =() =>{
       // console.log("Hello ", this);
         this.setState({
             name:"Kumar"
         });
     }
    render() {
        return (
            <div>
            <h1>{this.state.name}</h1>
            <button type='button' onClick={() =>this.HandleEvent() }>Click</button>

            {/* <button type='button' onClick={this.HandleEvent.bind(this)}>Click</button> */}
            </div>
        )
    }
}
