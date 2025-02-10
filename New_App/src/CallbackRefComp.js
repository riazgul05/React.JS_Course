import React, { Component } from 'react'

export default class CallbackRefComp extends Component {
 constructor(props) {
   super(props)
   this.myRef = null;
   this.setMyRef = (element) =>{
    this.myRef = element;
   }
 }
 componentDidMount(){
    console.log(this.myRef);
    this.myRef.focus();
 
 }
 handleSubmit =(e) =>{
    e.preventDefault();
    this.myRef.style.color ="Red";
    this.myRef.style.backgroundColor ="Yellow";
 console.log('Name =', this.myRef.value)
}
    render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input type="text" ref={this.setMyRef} placeholder='Enter Your Email'/>
      <br /><br />
      <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
