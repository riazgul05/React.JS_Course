import React, { Component } from 'react'

export default class ClassEffect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count:0
        }
    }
    componentDidMount() {
        console.log(" componentDidMount Called..");
    }
    componentDidUpdate() {
        console.log(" componentDidUpdate Called..")
    }
    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.updateCount}>Update</button>
            </div>
        )
    }
}
