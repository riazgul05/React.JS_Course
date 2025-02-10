import React, { Component } from 'react'

export default class Employee extends Component {
   
       state = {
            name:"Learning Never Ends",
            age: 23,
            surname: "Ansari"
            // name:1
        }
    

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name:this.props.name,
    //         age: 23,
    //         surname: "Ansari"
    //         // name:1
    //     }
    // }


    changeName() {
        this.setState({
            name: "Welcome To Ore Channel",
            age:33,
            surname:"Qureshi"
            //name:this.state.name + 1
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.surname}</h1>


                <input type="button" value="Click" onClick={() => this.changeName()} />
            </div>
        )
    }
}
