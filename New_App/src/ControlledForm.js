import React, { Component } from 'react'

export default class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "Adil"
        }
    }
    handleForm = (e) => {
        // console.log(e.target.value);
        this.setState({
            data: e.target.value.toLowerCase().substring(0, 15)

        });
    }

    handleFormSubmition = (e) => {
        e.preventDefault()
        console.log(e.target[0].value.toUpperCase());
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmition}>
                    <h1>{this.state.data}</h1>
                    <label htmlFor="">Enter Name: </label>
                    <input type="text" value={this.state.data} onChange={this.handleForm} />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
