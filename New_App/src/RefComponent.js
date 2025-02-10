import React, { Component, createRef } from 'react'

export default class RefComponent extends Component {
    constructor(props) {
        super(props)
        this.myRef = createRef();
        this.myRef2 = createRef();

    }
    componentDidMount() {
        console.log(this.myRef);
        console.log(this.myRef2);
        console.log(this.myRef.current.innerHTML);
    }

    handleHeading = () => {
        this.myRef.current.align = "right";
        // this.myRef.current.hidden = true;
        this.myRef.current.style.color = "red";
        this.myRef.current.style.backgroundColor = "yellow";

    }
    render() {
        return (
            <div>
                <h1 ref={this.myRef}>Welcome To Learning Never Ends</h1>
                <h1 ref={this.myRef2}>Mohammad Adil</h1>

                <button onClick={this.handleHeading}>Click</button>
            </div>
        )
    }
}
