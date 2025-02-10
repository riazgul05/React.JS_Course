import React, { Component } from 'react'

export default class MultipleInputs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Adil",
            email: "adil123@gmail.com"
        }
    }
    handleChange = (e) => {
        const New_value = (e.target.name === "email") ? e.target.value.toLowerCase().substring(0, 20) : e.target.value;
        this.setState({
            [e.target.name]: New_value
        });
        // console.log(e.target.value)
        // console.log(e.target.name)
        // const name = e.target.name
        // const value = e.target.value
        // this.setState({
        //     [name]: value
        // });
        // this.setState({
        //     name:e.target.value
        // })
    }

    // handlename =(e)=>{
    //     this.setState({
    //         name:e.target.value
    //     })
    // }
    // handleEmail =(e)=>{
    //     this.setState({
    //         email:e.target.value
    //     })
    // }
    render() {
        return (
            <div>
                <form >
                    <label htmlFor="">Enter Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder='Enter Your name' />
                    <br /><br />
                    <label htmlFor="">Enter Email: </label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Enter Your Email' />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
