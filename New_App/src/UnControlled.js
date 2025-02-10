import React, { Component, createRef } from 'react'

export default class UnControlled extends Component {
  constructor(props) {
    super(props)
    this.nameRef = createRef();
    this.ageRef = createRef();
  }

  componentDidMount(){
    console.log(this.nameRef);
    console.log(this.ageRef);
    this.nameRef.current.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name =', this.nameRef.current.value);
    console.log('Age =', this.ageRef.current.value);
  let email = document.getElementById('email').value;
  console.log('Email =' , email);
}
    render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
             <label htmlFor="">Enter Name :</label>
        <input type="text" value='Adil' placeholder='Name' ref={this.nameRef}/>
        <br /><br />
        <label htmlFor="">Enter Age</label>
        <input type="number " value='28' placeholder='Age' ref={this.ageRef}/>
        <br /><br />
        <label htmlFor="">Enter email</label>
        <input type="text" placeholder='Email' id='email'/>
        <br /><br />
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
