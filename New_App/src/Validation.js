import React, { useState } from 'react'

function Validation() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [nameError, setNameError] = useState(false);
   const [emailError, setEmailError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const handleName = (e) =>{
    let name = e.target.value
    if(name.length <3)
        {
            setNameError(true);
        }else{
            setNameError(false);
        }
  }

  

  const handleEmail = (e) =>{
    let email = e.target.value
    if(!email.match(emailRegex))
        {
            setEmailError(true)  
    }else{
        setEmailError(false)
    }
   
  }

  const handleSubmi = (e) =>{
    e.preventDefault();
    // alert(e.target[0].value + " " + e.target[1].value )
    let name = e.target[0].value
    if(name.length < 3)
        {
            setNameError(true);
        }else{
            setNameError(false);
        }
        let email = e.target[1].value
        if(!email.match(emailRegex))
            {
                setEmailError(true)  
        }else{
            setEmailError(false)
        }
        if((!name.length < 3) && (email.match(emailRegex)))
            {
                alert('Form has been Submitted...');
                alert('name= ' + name + " email= " + email );
        }
}
    return (
        <div>
            <h1>Form Validation Demo</h1>
            <form onSubmit={handleSubmi}>
                <label htmlFor="">Enter Name: </label>
                <input type="text" name='name' value={name} onChange={handleName} />
                <br />
                {nameError ? <span style={{color:"red"}}>Name Length Must be greater then 2 Characters </span> : ""}
                <br /><br />
                <label htmlFor="">Enter Email: </label>
                <input type="text" name='email' value={email} onChange={handleEmail}  />
                <br />
                {emailError ? <span style={{color:"red"}}>Invaild Email </span> : ""}
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Validation