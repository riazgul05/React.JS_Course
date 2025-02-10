import React from 'react'
import Student from './Student'

function Students() {
    //  const students = ["Adil","Kumar","Prem","Zain"]
    //  let studentNames = students.map((std, index) => <li key={index}>{std}</li>);
    // const numbers = [2,4,6,8];
    // const result = numbers.map(num => <h1>{num = num *2}</h1>)
  const students =[
    { 
        id:1,
        name:"Ali",
        age:23
    },
    {
        id:2,
        name:"Kumar",
        age:25
    },
    {
        id:3,
        name:"Prem",
        age:27
    }
  ]
    return (
    <div>
        {students.map(std =><Student key={std.id} std={std}/>)}
    {/* <ul>{studentNames}</ul> */}
    {/* {students.map(std =><Student std={std}/>)} */}
    {/* {result} */}
        
       {/* {numbers.map(num => <h1>{num = num * 2}</h1>)} */}
    </div>
  )
}

export default Students