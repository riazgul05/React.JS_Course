import React, { Component } from 'react'

export default class StyleComponent extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        active:false
     }
   }
   changeState =()=>{
    this.setState({
        active:true
    });
   }
    render() {
         
        // let obj ={
        //     color:"blue",
        //     backgroundColor:"orange",
        //     fontSize:"50px"
        // }

        // let obj1 = {
        //     color: "blue",
        //     backgroundColor: "orange",
        // }
        // let obj2 = {
        //    fontSize:"50px",
        //     fontFamily: "cooper"
        // }
         let obj ={
            color:"blue",
            backgroundColor:"orange",
            fontSize:"50px"
        }
        if(this.state.active){
            obj.backgroundColor ="yellow"
        }
        return (
            <div>
            <button style={obj} onClick={this.changeState}>Click</button>
                {/* <h1 style={{color:"red"}}>Learning Never Ends</h1> */}
                {/* <h1 style={{color:"red", backgroundColor:"yellow"}}>Learning Never Ends</h1> */}
                {/* <h1 style={obj}>Learning Never Ends</h1> */}
                {/* <h1 style={{...obj1,...obj2}}>Learning Never Ends</h1> */}
            </div>
        )
    }
}
