import React, { useState } from 'react'

function FunctionInputs() {
    const [data, setdata] = useState({
        name:"",
        email:""
    });

    const handleChange = (e) =>{
        // const name = e.target.name;
        // const value = e.target.value;
       const {name, value} = e.target;
        const new_value = (name === "email") ? value.toLowerCase().replace("#", "@") : value
        console.log(e.target);
        setdata((prev) =>{
                return{
                    ...prev, [name] : new_value
                }
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
       <label htmlFor="">Enter Name: </label>
        <input name='name' type="text" value={data.name} onChange={handleChange} placeholder='Enter your Name '/>
        <br /><br />
        <label htmlFor="">Enter Email: </label>
        <input name='email' type="text" value={data.email} onChange={handleChange} placeholder='Enter your Email'/>
      <br /><br />
      <input type="submit" value="Submit" />
       </form>
    </div>
  )
}

export default FunctionInputs