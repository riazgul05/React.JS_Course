import React, { Component } from 'react'

export default class Person1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Adil"
        }
        console.log("constructor Called..");
    }
    changeState = () => {
        this.setState({
            name: "Kumar"
        });
        console.log("Button Clicked..");
    }
    static getDerivedStateFromProps(props, state) {
        console.log(" getDerivedStateFromProps Called..");
        console.log(props);
        console.log(state);
        return null
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate Called..");
        console.log(nextProps);
        console.log(nextState);
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate Called..");
        console.log(prevProps);
        console.log(prevState);
        return "Hello"
    }
  componentDidUpdate(prevProps,prevState, snapshot){
console.log("componentDidUpdate Called..");
console.log(prevProps);
console.log(prevState);
console.log(snapshot );
  }
    render() {
        console.log("Render Called..");
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.props.city}</h1>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}
